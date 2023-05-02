import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main( ) {
    // ... you will write your Prisma Client queries here
    // We have a column call name, and we create a data call jack
    // const user = await prisma.user.create( { data : { name : "May" } } )
    const users = await prisma.user.findMany( ) ;
    console.log( users )
}


// Run main, if having error, catch the error and finally disconnect

try{
    main( ) ;
} catch{ ( error ) => {
    console.log( error.message ) ;
    }
} finally{ async( ) => {
    await prisma.$disconnect( ) ;
    }
}