function appInit() {
    new ClipboardJS("#copy-translation");
  }
  
  async function translation(sourceText) {
    if (sourceText) {
      if (sourceText.length > 0 && sourceText.length < 5001) {
        return await translate(sourceText, {
          from: "en",
          to: "tr",
          cache: 60 * 60 * 24
        });
      }
    }
  
    return "Translation";
  }
  
  const apps = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2965/2965306.png",
      name: "Gmail"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2965/2965278.png",
      name: "Search"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2965/2965363.png",
      name: "Youtube"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2965/2965283.png",
      name: "Translate"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2965/2965311.png",
      name: "Photos"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2965/2965293.png",
      name: "Calendar"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2965/2965323.png",
      name: "Drive"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2965/2965281.png",
      name: "Maps"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2965/2965274.png",
      name: "Hangouts"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2965/2965358.png",
      name: "Keep"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2965/2965317.png",
      name: "Adwords"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2965/2965327.png",
      name: "Sheets"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2965/2965330.png",
      name: "Business"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2965/2965360.png",
      name: "Forms"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2965/2965297.png",
      name: "News"
    }
  ];