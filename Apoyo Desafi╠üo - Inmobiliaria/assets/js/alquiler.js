const propiedades_alquiler=[
{
    name:"Apartamento en el centro de la ciudad",
    src:  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
   description:"Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo." ,
   address: "123 Main Street, Anytown, CA 91234",
   bedrooms: 2,
   bathrooms: 2,
   price: 2000,
   smoking:false,
   pets: true,
},
{
    name:"Apartamento luminoso con vista al mar",
    src:  "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
   description:"Este hermoso apartamento ofrece una vista impresionante al mar",
   address: "456 Ocean Avenue, Seaside Town, CA 56789",
   bedrooms: 3,
   bathrooms: 3,
   price: 2500,
   smoking:true,
   pets:  true,
},

{
    name:"Condominio moderno en zona residencial",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    description: "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    address: "123 Main Street, Anytown, CA 91234",
    bedrooms: 2,
    bathrooms: 2,
    price: 2200,
    smoking:false,
    pets: false,
},
{
    name:"Fantástico piso cerca a la Playa Puebla de Farnals",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    description: "El Fantástico piso cerca a la Playa Puebla de Farnals se encuentra en Las Canteras",
    address:  "4 Carrer Caravel-les, 46137 Las Canteras",
    bedrooms:1,
    bathrooms: 2,
    price: 2250,
    smoking: true,
    pets: true,
},
{
    name:"Apartamento con vistas al mar",
    src:  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    description: "El Apartamento con vistas al mar ofrece piscina privada",
    address:  "95 Camí Platja A, 46540 Las Canteras",
    bedrooms: 1,
    bathrooms: 2,
    price: 2300,
    smoking: false,
    pets: false,
},
{
    name:"Apartamento en complejo residencial con piscina y garaje a 100m del mar",
    src:  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    description:"El Apartamento en complejo residencial con piscina y garaje a 100m del mar se encuentra frente a la playa de Las Canteras",
    address:  "1 Urbanizacion Play-puig Mijares, 46540",
    bedrooms: 2,
    bathrooms:2,
    price: 3000,
    smoking: true,
    pets: true,
},
];

const mostrarPropiedadesAlquiler= ()=> {
    const container= document.getElementById("soloPropiedadesAquiler");
    propiedades_alquiler.forEach(propiedad => {
        const card=document.createElement("div")
        card.className = "col-md-4 mb-4";
        card.innerHTML = `
        <div class="card">
        <img
        src="${propiedad.src}" class="card-img-top"alt="Imagen de la propiedad"/>
      <div class="card-body">
      <h5 class="card-title">${propiedad.name}</h5>
      <p class="card-text">${propiedad.description}</p>
      <p>  
      <i class="fas fa-map-marker-alt"></i> ${propiedad.address} </p>
      <p>
        <i class="fas fa-bed"></i> ${propiedad.bedrooms} Habitaciones |
        <i class="fas fa-bath"></i> ${propiedad.bathrooms} Baños
      </p>
      <p><i class="fas fa-dollar-sign"></i> ${propiedad.price}</p>
      <p class="${propiedad.smoking ? "text-success" : "text-danger"}">
      <i class="fas ${
        propiedad.smoking ? "fa-smoking" : "fa-smoking-ban"
      }"></i>
      ${
        propiedad.smoking ? "Está permitido fumar" : "No se permite fumar"
      }
    </p>
    <p class="${propiedad.pets ? "text-success" : "text-danger"}">
      <i class="fas ${propiedad.pets ? "fa-paw" : "fa-ban"}"></i>
      ${
        propiedad.pets ? "Mascotas permitidas" : "No se permiten mascotas"
      }
    </p>
</div>
</div>
</div>
`;
container.appendChild(card);
    });
  };
     mostrarPropiedadesAlquiler();
