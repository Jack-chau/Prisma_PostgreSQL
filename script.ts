import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient( )
// const prisma = new PrismaClient( { log : [ "query" ] } ) // We can shows all the SQL log through this.

/*
async function main( ) {
    // ... you will write your Prisma Client queries here
    // We have a column call name, and we create a data call jack
    // const user = await prisma.user.create( { data : { name : "May" } } )
    // const users = await prisma.user.findMany( ) ;
    // console.log( users )

// ####### creating ########
    // You can delete all the user before you create,
    // that can makesure your code will not interrupted by any data stored inside the database
    // await prisma.userPreference.deleteMany( ) ;
    await prisma.user.deleteMany( ) ;

/*
    const user = await prisma.user.create( {
        data :
            {
                name : "Jack" ,
                email : "JackChau@gmail.com" ,
                age : 25 ,
                userPreference : {
                    create : {
                        emailUpdate : true ,
                    }
                }
            } , 

        // Add include can return the linked *table* together
        include : {
            userPreference : true ,
        }
        // On the other hand, we can select the field we want to return
        
        // ###### Either one *include or *select
        select : {
            name : true ,
            userPreference : { select : { emailUpdate : true } } , // Only return emailUpdate field, not include @id( PrimaryKey)
        } // Only return name and userPreference
        
    } )
    console.log( user ) ;
// #######################

// Create Many Users
    const users = await prisma.user.createMany( {
        data : 
            [
                {
                    name : "Jack",
                    email : "Jackchau@gmail.com",
                    age : 25,
                } ,
                {
                    name : "Marry" ,
                    email : "MarryMe@hotmail.com",
                    age : 31 ,
                },
                {
                    name : "Jok" ,
                    email : "joker@yahoo.com" ,
                    age : 11 ,
                }
            ]
    } )

// Find unique // Find unique always return one item
/*
    const user = await prisma.user.findUnique( { 
        where : {
            email : "Jackchau@gmail.com" ,
        },
    } )
    console.log( user ) ;
}

// ###############

// findFirst ( find the first data in the database )
// findMany ( find all data in the database)
    const user = await prisma.user.findFirst( {
        where : {
            name : "Jack",
        }
    } )

    console.log( user ) ;

}
*/

/*
async function main_2( ) {
    await prisma.user.deleteMany( ) ;
// Try pagination and distinctness
    const users = await prisma.user.createMany({
        data : [
            {
                name : "Jack" ,
                email : "JackChau@gmail.com" ,
                age : 25 ,
            },
            {
                name : "Jack" ,
                email : "chaukaho149@gmail.com" ,
                age : 27 ,
            },
            {
                name : "Jack",
                email : "JackChau0303@gmail.com" ,
                age : 30,
            }
        ]
    })
*/

/*
    // Now we have 3 users all named "Jack", Let's try pagination and distinctness
    const findUser = await prisma.user.findMany( {
        where : {
            name : "Jack" ,
        },
        // distinct : ["name"] // Will return one user call "Jack",
        // distinct : [ "name", "age" ] , // we got 3 users who named "Jack" because no one have same name + email

        orderBy : { // sort age by ascending order.
            age : "asc",
        },
        // "Pagination" which means how many you want to return
        take : 2 , // we have 3 Jack, return 2 only 
        skip : 1 , // ignore the first one
    } )

    console.log( findUser ) ;
*/
/*
    const findUser = await prisma.user.findMany( {
//        where : {
            // name : { equals : "Jack" }, // we got 3 user
            // name : { not : "Jack" } , // Got noting because all data named "Jack"
            // email : { in : ["JackChau0303@gmail.com", "chaukaho149@gmail.com"] }, // which email file has these two email? (That will return 2 user who having the email inside the array)
            // email : { notIn : ["JackChau0303@gmail.com", "chaukaho149@gmail.com"] } , // which email doesn't contain the email inside the array?
            // age : { lt: 29 } // The age less than 29
//        }


        // Contain
//        where : {
            // email : { contains : "@gmail.com" } , // whihc email contain "@gmail.com"
            // email : { endsWith : "@gmail.com" } ,
            //name : { startsWith : "J"} , // string start with "J"
//      }

        // Use AND
/* 
        where : {
            AND : [
                { email : { endsWith : "@gmail.com" } },
                { email : { startsWith : "Jack" } } ,
                { name : { startsWith : "J" } } ,
                { age : { gt : 10 } } , // greater than
            ]
        }
*/
/*
        where : {
            OR : [
                { email : { endsWith : "gmail.com" } } ,
                { age : { gt : 30 } } ,
                { name : { startsWith : "J"} },
            ]
        }
*/

/*
        where : {
            NOT : [
                { name : "Jacky" } ,
                { age : { gt : 26 } } ,
            ]
        }
        
    } )
    console.log( findUser ) ;
} 
*/

/*
async function main_3( ) {
    // chcek the database first
    // const users = await prisma.user.findMany( ) ;
    // If no user has the writtenPosts will also be returned.
    const users = await prisma.user.findMany( {
        where : {
            writtenPosts: { 
                some : { // some for any user has the title "post" (return empty ), you can use "none" and "every".
                    title : { startsWith : "Test" } ,
                },
            },
        },
    } ) ;

    const ageMatch = await prisma.post.findMany({
        where : {
            author : {
                is : {
                    age : 27,
                },
            }
        }
    });

    console.log( users ) ;
    console.log( ageMatch ) ;
}
*/

/*
async function main_5( ) {
    const users = await prisma.user.findMany() ;
    console.log( users ) ;
} ;

// Updating data
async function main_4() {
    // Update is combined with data and where ( find and replace )
    const user = await prisma.user.update({
        where : {
            email : "JackChau1@gmail.com",
        },
        data : {
            email : "JackChau333@gmail.com" ,
        },
    }) ;

    console.log( user ) ;
} ;
*/

//                  ####### Update by id ##########
async function check_user( ) {
    const checkUser = await prisma.user.findMany( {
        where : {
            name : "John"
        }
    } ) ;
    console.log( checkUser ) ;
} ;

/*
async function update_user( ) { 
    const updateUser = await prisma.user.update( {
        where : {
            id : "eda0dc26-c0fd-4914-b512-1ca5b6ec7d59" ,
        } ,

        data : {
            userPreference : {
                create : {
                    emailUpdate : true ,
                }
            }
        } ,
    } ) ;

    console.log( updateUser ) ;
} ;
*/

// ####### We can connect object or disconnect object 

async function disconnect_object( ) {
    const user = await prisma.user.update({
        where : {
            id : "eda0dc26-c0fd-4914-b512-1ca5b6ec7d59" , // user id
        } ,
        data : {
            userPreference : {
                disconnect : true, // one to one relationship( set to true is fine)
            },
        } ,
    }) ;

    console.log( user ) ;
} ;

// ########  delete

async function delete_user( ) {
    const deleteUser = await prisma.user.delete( { 
        where : {
            id : "eda0dc26-c0fd-4914-b512-1ca5b6ec7d59" ,
        } ,
    }) ;
    console.log( deleteUser ) ;
} ;

// Run main, if having error, c atch the error and finally disconnect
try{
    delete_user( ) ;
    check_user( ) ;
} catch{ ( error ) => {
    console.log( error.message ) ;
    }
} finally{ async( ) => {
    await prisma.$disconnect( ) ;
    }
}