import { PrismaClient } from "@prisma/client";
import { randomUUID } from "crypto";

const prisma = new PrismaClient()

async function main() {
    const user = await prisma.user.create({
        data: {
            id: randomUUID(),
            fullName: 'ilham pratama',
            rate: 12000
        }
    })

    const proyek = await prisma.proyek.createMany({
        data: [
            { name: 'Aplikasi Website' },
            { name: 'Desain UI' },
            { name: 'Asisten Virtual' },
            { name: 'Desain Logo' },
            { name: 'Aplikasi Timesheet' },
        ],
        skipDuplicates: true,
    })

    return { user, proyek }

}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })