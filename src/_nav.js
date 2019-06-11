export default {
  items: [
    {
      name: "Accueil",
      url: "/dashboard",
      icon: "fa fa-home fa-lg mt-2" // icon: 'icon-speedometer'
    },

    // ** espace ecole **
    // ** utilisateur **
    {
      title: true,
      name: "Espace Administration",
      wrapper: {
        element: "",
        attributes: {}
      },
      class: ""
    },
    {
      name: "Utilisateur",
      url: "/users",
      icon: "fa fa-user fa-lg mt-2",
      children: [{
          name: "Listes",
          url: "/listes",
          icon: "fa fa-pencil-square-o fa-lg mt-2"
        },
        {
          name: "Ajouter",
          url: "/register",
          icon: "fa fa-ravelry fa-lg mt-2"
        }
      ]
    },
    {
      name: "Scolarité",
      url: "/scolarite",
      icon: "fa fa-briefcase fa-lg mt-2",
      children: [
        {
          name: "Inscription",
          url: "/inscription",
          icon: "fa fa-pencil-square-o fa-lg mt-2"
        },
        {
          name: "Autre action",
          url: "/autre",
          icon: "fa fa-ravelry fa-lg mt-2"
        }
      ]
    },
    {
      name: "Ressource Humaine",
      url: "/rh",
      icon: "fa fa-address-book fa-lg mt-2"
    },
    {
      name: "Bibliothèque",
      url: "/bibliotheque",
      icon: "fa fa-book fa-lg mt-2"
    },
    // ** tableau de bord **
    {
      name: "tableau de bord",
      url: "/tab-bord",
      icon: "icon-speedometer",
      children: [
        {
          name: "Première Année",
          url: "/premiere-annee",
          icon: "fa fa-ravelry fa-lg mt-2"
        },
        {
          name: "Deuxième Année",
          url: "/deuxieme-annee",
          icon: "fa fa-ravelry fa-lg mt-2"
        },
        {
          name: "Troisième Année",
          url: "/troisieme-annee",
          icon: "fa fa-ravelry fa-lg mt-2"

          /* ######### Filière dans le niveau Troisiième année ########## */
          /* children: [{
                       name: 'Spécialité A',
                       url: '/buttons/brand-buttons',
                       icon: 'fa fa-ravelry fa-lg mt-4',
                     },
                     {
                       name: 'Spécialité B',
                       url: '/buttons/brand-buttons',
                       icon: 'fa fa-ravelry fa-lg mt-4',
                     }
                   ], */
        },
        {
          name: "Quatrième Année",
          url: "/quatrieme-annee",
          icon: "fa fa-ravelry fa-lg mt-2"
        },
        {
          name: "Cinquième Année",
          url: "/cinquieme-annee",
          icon: "fa fa-ravelry fa-lg mt-2",
          badge: {
            variant: "danger",
            text: "PRO"
          }
        }
      ]
    },
    // ** espace ecole **
    // ** utilisateur **
    {
      title: true,
      name: "Espace Etude",
      wrapper: {
        element: "",
        attributes: {}
      },
      class: ""
    },
    {
      name: "Etudiant",
      url: "/etudiants",
      icon: "fa fa-graduation-cap fa-lg mt-2"
    },
    {
      name: "Examen",
      url: "/examen",
      icon: "fa fa-flash fa-lg mt-2"
    },
    {
      name: "Emploi du temps",
      url: "/salles",
      icon: "icon-user"
    },
    // ** espace ecole **
    // ** utilisateur **
    {
      title: true,
      name: "Espace Ecole",
      wrapper: {
        element: "",
        attributes: {}
      },
      class: ""
    },
    {
      name: "Salles",
      url: "/salles",
      icon: "icon-user"
    },
    {
      title: true,
      name: "Espace Personnel",
      wrapper: {
        element: "",
        attributes: {}
      },
      class: ""
    },
    {
      name: "profil",
      url: "/profil",
      icon: "icon-user"
    },
    /* Start Gestion document  */
    {
      title: true,
      name: "Espace Documents",
      wrapper: {
        element: "",
        attributes: {}
      },
      class: ""
    }, 
    {
      name: "Envoie",
      url: "/document/envoie",
      icon: "fa fa-file"
    },
    {
      name: "Categories",
      url: "/document/categories",
      icon: "fa fa-th"
      
    },
    /* End Gestion document  */
    /* ####################### */
    {
      title: true,
      name: "Espace Admin System",
      wrapper: {
        element: "",
        attributes: {}
      },
      class: ""
    },
    {
      name: "Parametre System",
      url: "/system",
      icon: "fa fa-gears fa-lg mt-2"
    }

  ]
};
