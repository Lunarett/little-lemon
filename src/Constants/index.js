import {
    bruschetta,
    greekSalad,
    lemonDessert,
    stuffedMushroom,
    chickenWings,

    pfp1,
    pfp2,
    pfp3,
    penny,
    grillChicken,
    steak,
    fishTacos,
    icedTea,
    latte,
    berrySmoothie,
    maracujaSmoothie,
    seasonalSoup,
    lamb,
    salmon,
    chocolateCake,
    applePie,
} from '../Assets';

export const specials = [
    {
        name: "Greek Salad",
        price: "$6.50",
        desc: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        image: greekSalad
    },
    {
        name: "Bruschetta",
        price: "$4.50",
        desc: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        image: bruschetta
    },
    {
        name: "Lemon Dessert",
        price: "$5.00",
        desc: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        image: lemonDessert
    },
];

export const menu = [
    {
        category: "Appetizers",
        items: [
            {
                name: "Greek Salad",
                price: "$6.50",
                desc: "The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons.",
                image: greekSalad
            },
            {
                name: "Bruschetta",
                price: "$4.50",
                desc: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
                image: bruschetta
            },
            {
                name: "Stuffed Mushrooms",
                price: "$5.50",
                desc: "Mushrooms stuffed with a mixture of cheese and herbs, baked to perfection.",
                image: stuffedMushroom
            },
            {
                name: "Chicken Wings",
                price: "$7.00",
                desc: "Crispy chicken wings coated in our special sauce, served with celery and ranch dip.",
                image: chickenWings
            }
        ]
    },
    {
        category: "Main Courses",
        items: [
            {
                name: "Penny Pasta",
                price: "$8.00",
                desc: "Delicious penny pasta cooked al dente, served with a rich tomato sauce and fresh basil.",
                image: penny
            },
            {
                name: "Steak",
                price: "$15.00",
                desc: "Juicy steak cooked to your liking, served with garlic mashed potatoes and steamed vegetables.",
                image: steak
            },
            {
                name: "Grilled Chicken",
                price: "$12.00",
                desc: "Tender chicken breast grilled to perfection, served with quinoa and asparagus.",
                image: grillChicken
            },
            {
                name: "Fish Tacos",
                price: "$10.00",
                desc: "Soft-shell tacos filled with grilled fish, cabbage slaw, and a zesty lime crema.",
                image: fishTacos
            }
        ]
    },
    {
        category: "Desserts",
        items: [
            {
                name: "Lemon Dessert",
                price: "$5.00",
                desc: "A tangy lemon dessert that will tantalize your taste buds.",
                image: lemonDessert
            },
            {
                name: "Chocolate Cake",
                price: "$6.00",
                desc: "Rich and moist chocolate cake, served with vanilla ice cream.",
                image: chocolateCake
            },
            {
                name: "Apple Pie",
                price: "$5.50",
                desc: "Classic apple pie with a flaky crust, served warm.",
                image: applePie
            }
        ]
    },
    {
        category: "Drinks",
        items: [
            {
                name: "Lemon Iced Tea",
                price: "$6.50",
                desc: "Refreshing iced tea made from freshly brewed tea leaves.",
                image: icedTea
            },
            {
                name: "Latte",
                price: "$5.00",
                desc: "Hot, aromatic coffee brewed to perfection.",
                image: latte
            },
            {
                name: "Berry Smoothie",
                price: "$8.00",
                desc: "A blend of fresh berries and yogurt to refresh you.",
                image: berrySmoothie
            },
            {
                name: "Maracuja Smoothie",
                price: "$8.00",
                desc: "A blend of maracuja fruit and yogurt to refresh you.",
                image: maracujaSmoothie
            }
        ]
    },
    {
        category: "Specials",
        items: [
            {
                name: "Seasonal Soup",
                price: "$5.00",
                desc: "A hearty soup made from seasonal ingredients.",
                image: seasonalSoup
            },
            {
                name: "Lamb Chops",
                price: "$18.00",
                desc: "Grilled lamb chops served with mash potatoes and ",
                image: lamb
            },
            {
                name: "Grilled Salmon",
                price: "$12.00",
                desc: "A delicious grilled salmon dish, featuring a variety of fresh vegetables",
                image: salmon
            }
        ]
    }
];

export const testimonials = [
    {
        image: pfp1,
        name: "Sarah Lopez",
        username: "Sara72",
        msg: "Best Feta Salad in town. Flawless everytime!",
    },
    {
        image: pfp2,
        name: "Noah Turner",
        username: "AhnoT56",
        msg: "Service was outstanding!",
    },
    {
        image: pfp3,
        name: "Sandra Murphy",
        username: "Smurf95",
        msg: "food tasted great and prepared quickly!",
    },
];