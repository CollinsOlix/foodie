import { useContext } from "react";
import { MenuData } from "./types";
import Context from "../Context";
const { lang, setLang } = useContext(Context) as {
  lang: "en" | "tr";
  setLang: (lang: "en" | "tr") => void;
}; // Specify the type for lang;

const DATA: MenuData = {
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
          pic: require("@/assets/images/placeholder.jpg"),
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
    {
      title: "Eggs on request",
      data: [
        {
          title: "Plain Omelette",
          time: "~10",
          price: "170",
          subNote: "Plain Omelette",
          pic: require("@/assets/images/plainOmelette.png"),
        },
        {
          title: "Boiled Eggs",
          time: "~10",
          price: "100",
          subNote: "Boiled Eggs",
          pic: require("@/assets/images/boiledEggs.jpg"),
        },
        {
          title: "Fried Eggs",
          time: "~10",
          price: "170",
          subNote: "Fried Eggs",
          pic: require("@/assets/images/friedEggs.jpg"),
        },
        {
          title: "Turkish Style Eggs",
          time: "~10",
          price: "280",
          subNote: "Turkish Style Eggs",
          pic: require("@/assets/images/menemen.jpg"),
        },
      ],
    },
    {
      title: "Additions",
      data: [
        {
          title: "Roasted Beef",
          pic: require("@/assets/images/roastedBeef.jpg"),
          subNote: "Roasted beef",
          price: "200",
        },
        {
          title: "Sausage",
          pic: require("@/assets/images/sausage.png"),
          subNote: "Sausage",
          price: "200",
        },
        {
          title: "Bacon",
          pic: require("@/assets/images/bacon.jpg"),
          subNote: "Bacon",
          price: "250",
        },
        {
          title: "Tomatoes",
          pic: require("@/assets/images/tomato.jpg"),
          subNote: "Tomatoes",
          price: "100",
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
    {
      title: "Yumurta çeşitleri",
      data: [
        {
          title: "Sade Omlet",
          time: "~10",
          price: "170",
          subNote: "Sade Omlet",
          pic: require("@/assets/images/plainOmelette.png"),
        },
        {
          title: "Haşlanmış Yumurta",
          time: "~10",
          price: "100",
          subNote: "Haşlanmış Yumurta",
          pic: require("@/assets/images/boiledEggs.jpg"),
        },
        {
          title: "Sahanda Yumurta",
          time: "~10",
          price: "170",
          subNote: "Sahanda Yumurta",
          pic: require("@/assets/images/friedEggs.jpg"),
        },
        {
          title: "Menemen",
          time: "~10",
          price: "280",
          subNote: "Menemen",
          pic: require("@/assets/images/menemen.jpg"),
        },
      ],
    },
  ],
};

// Example usage:
// const userInput = "Les ";
// const extractedElements = extractElements(DATA, userInput);
// console.log(extractedElements);

export { DATA };
