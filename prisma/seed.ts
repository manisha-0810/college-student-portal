import { PaymentStatus, PrismaClient, UserRole } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

const subjectData = [
  { code: "CS204", name: "Data Structures", credits: 4 },
  { code: "CS205", name: "Database Systems", credits: 4 },
  { code: "CS206", name: "Operating Systems", credits: 4 },
  { code: "CS207", name: "Computer Networks", credits: 3 },
  { code: "MA201", name: "Discrete Mathematics", credits: 3 },
];

const studentData = [
  ["1CH24CS001", "Aarav Sharma", "aarav.sharma@campushub.edu"],
  ["1CH24CS002", "Diya Nair", "diya.nair@campushub.edu"],
  ["1CH24CS003", "Kabir Singh", "kabir.singh@campushub.edu"],
  ["1CH24CS004", "Ananya Reddy", "ananya.reddy@campushub.edu"],
  ["1CH24CS005", "Vihaan Patel", "vihaan.patel@campushub.edu"],
  ["1CH24CS006", "Ishita Gupta", "ishita.gupta@campushub.edu"],
  ["1CH24CS007", "Arjun Menon", "arjun.menon@campushub.edu"],
  ["1CH24CS008", "Meera Joshi", "meera.joshi@campushub.edu"],
  ["1CH24CS009", "Rohan Das", "rohan.das@campushub.edu"],
  ["1CH24CS010", "Sneha Kulkarni", "sneha.kulkarni@campushub.edu"],
] as const;

async function main() {
  // Child records cascade with their students; subjects are retained and upserted below.
  await prisma.student.deleteMany();

  const subjects = await Promise.all(
    subjectData.map((subject) =>
      prisma.subject.upsert({
        where: { code: subject.code },
        update: subject,
        create: subject,
      }),
    ),
  );

  const passwordHash = await hash("student123", 12);

  for (const [studentIndex, [usn, name, email]] of studentData.entries()) {
    const student = await prisma.student.create({
      data: { usn, name, email, department: "Computer Science", semester: 4, passwordHash, role: studentIndex === 0 ? UserRole.ADMIN : UserRole.STUDENT },
    });

    await prisma.attendance.createMany({
      data: subjects.map((subject, subjectIndex) => ({
        studentId: student.id,
        subjectId: subject.id,
        percentage: 72 + ((studentIndex * 7 + subjectIndex * 5) % 25),
      })),
    });

    await prisma.marks.createMany({
      data: subjects.map((subject, subjectIndex) => ({
        studentId: student.id,
        subjectId: subject.id,
        internalMarks: 20 + ((studentIndex + subjectIndex * 2) % 11),
        finalMarks: 46 + ((studentIndex * 3 + subjectIndex * 4) % 25),
      })),
    });

    await prisma.payment.create({
      data: {
        studentId: student.id,
        amount: "42500.00",
        paymentDate: new Date("2025-07-15T00:00:00.000Z"),
        status: studentIndex % 3 === 0 ? PaymentStatus.PENDING : PaymentStatus.PAID,
      },
    });
  }

  console.log(`Seeded ${studentData.length} students and ${subjects.length} subjects.`);
}

main()
  .catch((error: unknown) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
