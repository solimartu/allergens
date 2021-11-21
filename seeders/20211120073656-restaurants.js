"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Restaurants",
      [
        {
          restaurant: "Five Guys",
          allergyMenu:
            "https://www.fiveguys.com/-/media/public-site/files/allergen-ingredients-and-nutrition-info/allergen-guide/nutrition-allergen-march-2018-us.ashx",
          glovoLink: "https://glovoapp.com/es/es/barcelona/fiveguysbcn/",
          uberEatsLink: null,
          glovoRating: "0.87",
          uberEatsRating: null,
          imgLink: "https://media.timeout.com/images/105276301/image.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant: "Youme Sushi",
          allergyMenu:
            "https://www.youmebcn.com/product?category_id=13&#product",
          glovoLink:
            "https://glovoapp.com/es/es/barcelona/youme-sushi-barcelona/",
          uberEatsLink: null,
          glovoRating: "0.97",
          uberEatsRating: null,
          imgLink:
            "https://youmesushi.com/wp-content/uploads/2016/02/YouMeSushi-BrentCross-Branch.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant: "Honest Greens",
          allergyMenu:
            "https://honestgreens.com/pdfs/alergenos/210113_Alergenos_HonestGreens.pdf",
          glovoLink: "https://glovoapp.com/es/es/barcelona/honest-greens-bcn/",
          uberEatsLink: null,
          glovoRating: "0.9",
          uberEatsRating: null,
          imgLink:
            "https://media-cdn.tripadvisor.com/media/photo-s/14/63/25/3a/ofrecemos-productos-de.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant: "Poke House",
          allergyMenu: "https://poke-house.com/es-es/menu/alergenos-es/",
          glovoLink:
            "https://glovoapp.com/es/es/barcelona/poke-house-barcelona/",
          uberEatsLink:
            "https://www.ubereats.com/es-en/store/poke-house-diagonal/jPm_qc6HUCaxlL8Z7VOUTQ",
          glovoRating: "0.93",
          uberEatsRating: "4.3",
          imgLink:
            "https://duyt4h9nfnj50.cloudfront.net/resized/3974a4f6373b07204ff0b5ed001c1121-w2880-2c.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant: "Empanadish",
          allergyMenu:
            "https://empanadish.com/wp-content/uploads/2021/08/Carta-de-Alergenos-scaled.jpg",
          glovoLink: "https://glovoapp.com/es/es/barcelona/empanadish-bcn/",
          uberEatsLink: null,
          glovoRating: "0.93",
          uberEatsRating: null,
          imgLink:
            "https://uploads-ssl.webflow.com/5d52d258d4a63019253c672b/60f95104a97a7c56c270cdac_43950065_355692921837062_3597435628985253888_n.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant: "Santagloria",
          allergyMenu: "https://www.santagloria.com/pdfs/alergenos.pdf",
          glovoLink: "https://glovoapp.com/es/es/barcelona/santagloria-bcn/",
          uberEatsLink:
            "https://www.ubereats.com/es-en/store/santagloria-tetuan/WY6VSkh9SgePi_r6EQXY5A?ps=1",
          glovoRating: "1",
          uberEatsRating: null,
          imgLink:
            "https://www.rli.uk.com/wp-content/uploads/2021/03/Foodbox.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant: "Moncho's House",
          allergyMenu:
            "https://www.monchos.com/img_contenido/locales/8228_CARTAS_ONLINE_MONCHO_S_HOUSE.pdf",
          glovoLink:
            "https://glovoapp.com/es/es/barcelona/monchos-house-barcelona/",
          uberEatsLink: null,
          glovoRating: "1",
          uberEatsRating: null,
          imgLink:
            "https://www.monchos.com/img_contenido/locales_galeria/2553_Gastronomia_monchoshouseL1007752.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant: "Aloha Vegan Poke",
          allergyMenu:
            "https://drive.google.com/file/d/1f9MY8eBtPHXhmGASTW5_2s655GaMnwcZ/view",
          glovoLink:
            "https://glovoapp.com/es/es/barcelona/aloha-vegan-poke-barcelona/",
          uberEatsLink:
            "https://www.ubereats.com/es-en/store/aloha-vegan-poke-diagonal/-2fV7UVnQm-iPChUPkc8Eg",
          glovoRating: "1",
          uberEatsRating: null,
          imgLink:
            "https://i.pinimg.com/originals/db/22/1e/db221ef7c8944d14584ed1f0a8262e75.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant: "Empanadas Argentina Ruta 40",
          allergyMenu: "https://queresto.com/ruta40empanadastakeaway",
          glovoLink: "https://glovoapp.com/es/es/barcelona/ruta-40-barcelona/",
          uberEatsLink:
            "https://www.ubereats.com/es-en/store/empanadas-ruta-40/nKkqv0VMRdufFq6uzyAxpA",
          glovoRating: "1",
          uberEatsRating: "4.9",
          imgLink:
            "https://d1ralsognjng37.cloudfront.net/66f4d04c-7810-43f0-ab2b-7a5b1d494a25.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant: "Chocolateria Valor",
          allergyMenu: "https://www.valor.es/alergenos",
          glovoLink:
            "https://glovoapp.com/es/es/barcelona/chocolateria-valor-barcelona/",
          uberEatsLink:
            "https://www.ubereats.com/es-en/store/chocolates-valor-carrer-tapineria/ShgmRovaTUKtg1l2LySdBw",
          glovoRating: "1",
          uberEatsRating: null,
          imgLink:
            "https://cdn.tasteatlas.com/images/dishrestaurants/62c5205bdf1d4633923a0d19d0a28fdc.jpg?w=600&h=450",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant: "Coco House",
          allergyMenu: "https://www.ilovecocohouse.com/carta-barcelona",
          glovoLink:
            "https://glovoapp.com/es/es/barcelona/coco-house-barcelona-vb/",
          uberEatsLink:
            "https://www.ubereats.com/es-en/store/coco-house-gracia/4ImaHU71XMWVN8_QPvnYFw",
          glovoRating: "1",
          uberEatsRating: null,
          imgLink:
            "https://images.happycow.net/venues/1024/17/18/hcmp171888_677124.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant: "Oasis Lovely Pizza",
          allergyMenu:
            "https://oassisnaturalcooking.com/custom/uploads/2021/07/Oassis_Carta_Allergens_ESP.pdf",
          glovoLink:
            "https://glovoapp.com/es/es/barcelona/oassis-lovely-pizza-bcn/",
          uberEatsLink:
            "https://www.ubereats.com/es-en/store/oassis-natural-cooking/r6W8StYkQ5WuG0kBCOpBCQ",
          glovoRating: "0.98",
          uberEatsRating: "4.2",
          imgLink:
            "https://res.cloudinary.com/tf-lab/image/upload/w_600,h_337,c_fill,g_auto:subject,q_auto,f_auto/restaurant/bbc62a39-3247-4203-97a6-5bc37302f4d4/249b6e94-ebb6-441b-b72b-2512526f712a.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant: "Juicey Avenue Vegan",
          allergyMenu:
            "https://ad15c507-28c9-45e3-b980-c0df79cb31ff.filesusr.com/ugd/e6e4f2_8deccb3ee3f643f29061b8f60c754d28.pdf",
          glovoLink: "https://glovoapp.com/es/es/barcelona/juicyveganbcnrest/",
          uberEatsLink: null,
          glovoRating: "0.96",
          uberEatsRating: null,
          imgLink:
            "https://res.cloudinary.com/glovoapp/h_225,f_auto,q_auto/Stores/nw37kmbd5jdxay7p9hkg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant: "Pizzeria Trattoria Da Raimondo",
          allergyMenu:
            "https://glovoapp.com/es/es/barcelona/pizzeria-trattoria-da-raimondo-barcelona/",
          glovoLink:
            "https://glovoapp.com/es/es/barcelona/pizzeria-trattoria-da-raimondo-barcelona/",
          uberEatsLink: null,
          glovoRating: "1",
          uberEatsRating: null,
          imgLink:
            "https://res.cloudinary.com/glovoapp/h_225,f_auto,q_auto/Stores/tzaglcpurgce3q4ujz36",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant: "Udon",
          allergyMenu: "https://order.udon.com/en/food/",
          glovoLink: "https://glovoapp.com/es/es/barcelona/udon-barcelona/",
          uberEatsLink: null,
          glovoRating: "0.98",
          uberEatsRating: null,
          imgLink:
            "https://media-cdn.tripadvisor.com/media/photo-s/0f/c7/5c/a0/miso.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant: "Healthy poke",
          allergyMenu:
            "https://www.healthypoke.com/wp-content/uploads/2021/04/ALE%CC%81RGENOS-HEALTHY-POKE.xlsx-Hoja-2-1.pdf",
          glovoLink:
            "https://glovoapp.com/es/es/barcelona/healthy-poke-barcelona/",
          uberEatsLink: null,
          glovoRating: "0.91",
          uberEatsRating: null,
          imgLink:
            "https://media-cdn.tripadvisor.com/media/photo-s/1c/19/7c/b0/variedad-poke-bowls.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant: "Rasa Malaysia",
          allergyMenu:
            "https://www.rasamalaysia.es/?gclid=Cj0KCQjwrJOMBhCZARIsAGEd4VGYk8rsjxyEoKbEw1YI3bNgsq-oEr9PYa1KfwuJ3PCMBoL-ZZrI-3IaAgDXEALw_wcB",
          glovoLink:
            "https://glovoapp.com/es/es/barcelona/rasa-malaysia-barcelona/",
          uberEatsLink:
            "https://www.ubereats.com/store/rasa-malaysia/LgjMnhaLR3m-AxbBhr3w9A",
          glovoRating: "0.98",
          uberEatsRating: "4.9",
          imgLink:
            "https://www.rasamalaysia.es/uploads/products/1598187690.JPG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant: "nonomoto",
          allergyMenu:
            "https://www.nomomoto.es/upload/carta/carta_alergenos.pdf?v=092021",
          glovoLink: "https://glovoapp.com/es/es/barcelona/grupo-nomo/",
          uberEatsLink: null,
          glovoRating: "0.94",
          uberEatsRating: null,
          imgLink: "https://gruponomo.com/wp-content/uploads/30001-01-0247.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant: "la tagliatella",
          allergyMenu:
            "https://www.latagliatella.es/sites/default/files/2021-10/Allergen_information_TAG_EN_2021_v14.6.pdf",
          glovoLink:
            "https://glovoapp.com/es/es/barcelona/tagliatella-barcelona/",
          uberEatsLink:
            "https://www.ubereats.com/store/la-tagliatella-barcelona-travessera-de-gracia/HVXxTCu9TgSz_CTTvCW-kQ",
          glovoRating: "0.95",
          uberEatsRating: "4.5",
          imgLink:
            "https://d1ralsognjng37.cloudfront.net/f34099e0-a3d6-4d88-94bd-0faad6b75d21.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant: "bro room ",
          allergyMenu:
            "https://brobarcelona.com/wp-content/uploads/2021/09/BRO-room-agost-2021-4.pdf",
          glovoLink: "https://glovoapp.com/es/es/barcelona/bro-room-barcelona/",
          uberEatsLink: null,
          glovoRating: "0.99",
          uberEatsRating: null,
          imgLink:
            "https://www.mantelacuadros.com/wp-content/uploads/2019/12/portada-hamburgueseria-bro-room-barcelona.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Restaurants", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
