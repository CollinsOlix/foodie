const DATA = {
  en: [
    {
      title: "SET BREAKFAST",
      data: [
        {
          title: "Breakfast Plate",
          subNote:
            "Variety of bread, croissant, toasted bread, marmalade, honey, jam, butter, please choose one of the option: freshly squeezed orange juice, grapefruit juice, tea, coffee or hot chocolate.",
          price: "900",
          pic: require("../../assets/images/breakfastPlate.jpg"),
          time: "~30",
        },
        {
          title: "Les Breakfast",
          time: "~30",
          subNote:
            "Juice of your Choice: Orange, Grapefruit, Apple, Carrot. Freshly Brewed Turkish Tea. Assorted Bakery Basket Turkish Sesame Bagel, Pastry and Assorted Bread. Traditional Turkish Feta Cheese, Goat Cheese, Aged Cheddar, Jams, grilled sausage, grilled halloumi, Marinated Olives, Tomato, Cucumber, Honey with Cream, Dry Apricot, Cheese pastry and Butter. Choose your egg (menemen, sunny side up egg, omelette, boiled egg).",
          price: "900, 1600",
          pic: require("@/assets/images/placeholder.jpg"),
        },
      ],
    },
    {
      title: "A LA CARTE BREAKFAST",
      data: [
        {
          title: "Cereals",
          price: "275",
          time: "~10",
          subNote:
            "Corn Flakes Choco-Crumpies, or Granola. Served with Cold or Hot Milk, Light Milk.",
        },
        {
          title: "Sliced fruit plate",
          price: "350",
          time: "~10",
          subNote: "Sliced seasonal fruits.",
          pic: require("@/assets/images/fruitPlate.png"),
        },
        {
          title: "Pancake",
          price: "330",
          subNote: "Served with Maple Syrup and/or Fruit Salad.",
          pic: require("@/assets/images/pancake.jpg"),
        },

        {
          title: "Roasted beef",
          subNote: "Breakfast Roasted Beef",
          pic: require("@/assets/images/roastedBeef.jpg"),
          price: "900",
        },
      ],
    },
  ],
  tr: [
    {
      title: "SET KAHVALTILAR",
      data: [
        {
          title: "Kahvaltı tabağı",
          subNote:
            "Çeşitli ekmekler, kruvasan, kızarmış ekmek, marmelat, bal, reçel, tereyağı, lütfen birini seçin: taze sıkılmış portakal suyu, greyfurt suyu, çay, kahve veya sıcak çikolata.",
          price: "900",
          pic: require("../../assets/images/breakfastPlate.jpg"),
          time: "~30",
        },
        {
          title: "Les Breakfast",
          time: "~30",
          subNote:
            "Seçiminiz: Portakal, Greyfurt, Elma, Havuç Suyu. Taze Demlenmiş Türk Çayı. Çeşitli Fırın Sepeti Türk Simidi, Poğaça ve Çeşitli Ekmekler. Geleneksel Türk Beyaz Peyniri, Keçi Peyniri, Eski Kaşar, Reçeller, Izgara Sucuk, Izgara Hellim, Marine Zeytinler, Domates, Salatalık, Kaymaklı Bal, Kuru Kayısı, Peynirli Börek ve Tereyağı. Yumurtanızı seçin (menemen, sahanda yumurta, omlet, haşlanmış yumurta).",
          price: "900, 1600",
          pic: require("@/assets/images/placeholder.jpg"),
        },
      ],
    },
    {
      title: "A LA CARTE KAHVALTILAR",
      data: [
        {
          title: "Tahıllardan Seçiminiz",
          price: "275",
          time: "~10",
          subNote:
            "Mısır Gevreği, Choco-Crumpies veya Granola. Soğuk veya Sıcak Süt, Hafif Süt ile servis edilir.",
        },
        {
          title: "Dilimlenmiş Meyve Tabağı",
          price: "350",
          time: "~10",
          subNote: "Dilimlenmiş Meyve Tabağı",
          pic: require("@/assets/images/fruitPlate.png"),
        },
        {
          title: "Pankek",
          price: "330",
          subNote: "Akçaağaç Şurubu ve Meyve Salatası ile servis edilir.",
          pic: require("@/assets/images/pancake.jpg"),
        },

        {
          title: "Kavurma",
          subNote: "Kavurma",
          pic: require("@/assets/images/roastedBeef.jpg"),
          price: "900",
        },
      ],
    },
  ],
};
// {
//   title: "SET KAHVALTILAR",
//   en: "SET BREAKFAST",
//   pic: require("@/assets/images/placeholder.jpg"),
//   data: [
//     {
//       title: "Kahvalti tabagi",
//       en: "Breakfast plate",
//       price: 900,
//       subNote1: "",
//     },
//     {
//       title: "Salads/Salatalar",
//       data: [
//         {
//           title: "Classic Caesar Salad",
//           id: "ceaserSalad",
//           subNote: "Parmesan Shavings and Garlic Croutons",
//           pic: require("@/assets/images/csalad.jpg"),
//           time: "<20",
//         },
//         {
//           title: "Caprese Salad ",
//           id: "capreseSalad ",
//           subNote:
//             "Sliced Roma Tomatoes, Buffalo Mozzarella, Balsamic Dressing and Basil (v)",
//           pic: require("@/assets/images/capresesalad.jpg"),
//           time: "<20",
//         },
//       ],
//     },
//     {
//       title: "Soups/Çorbalar",
//       data: [
//         {
//           title: "Tomato Soup with Basil Cream (v)",
//           id: "tomatoSoup",
//           pic: require("@/assets/images/tomatoSoup.jpg"),
//         },
//       ],
//     },
//     {
//       title: "Cold Sandwiches",

//       data: [
//         {
//           title: "Egg Mayonnaise and Cress (v)",
//           id: "eggMayoCress",
//           pic: require("@/assets/images/placeholder.jpg"),
//         },
//         {
//           title: "Smoked Salmon* and Cucumber in a Poppy Seed Bage",
//           id: "smokedSalmonCucumber",
//           pic: require("@/assets/images/placeholder.jpg"),
//         },
//       ],
//     },

//     {
//       title: "Pizzas/Pizzalar",
//       id: "pizza",
//       pic: require("@/assets/images/placeholder.jpg"),
//       data: [
//         {
//           title: "Hawaiian Pizza",
//           id: "burger",
//           pic: require("@/assets/images/placeholder.jpg"),
//         },
//       ],
//     },
//   ],
// },
// {
//   title: "Drinks",

//   data: [{}],
// },

export default DATA;
