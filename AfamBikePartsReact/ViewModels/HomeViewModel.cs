using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AfamBikePartsReact.ViewModels
{

    public class ProductGroup
    {
        public string Name { get; set; }
        public string Value { get; set; }
        public bool Selected { get; set; }
    }

    public class MainGroup
    {
        public string Name { get; set; }
        public string Value { get; set; }
        public bool Selected { get; set; }
        public ProductGroup[] ProductGroups { get; set; }
    }


    public class HomeViewModel
    {
        public MainGroup[] Groups { get; set; }

        public string SelectedMainGroup { get; set; }

        public string SelectedProductGroups { get; set; }

        public string SelectedLanguage { get; set; }

        public bool ReactAppHidden { get; set; }

        public HomeViewModel()
        {
            Groups = new MainGroup[]
            {
                new MainGroup {
                    Name = "Kits",
                    Value = "kits",
                    Selected = true,
                    ProductGroups = new ProductGroup[] {
                        new ProductGroup{Name="AFAM kits", Value="AFAM", Selected=true},
                        new ProductGroup{Name="DC kits", Value="DC", Selected=false},
                        new ProductGroup{Name="3D kits", Value="Threed", Selected=false}
                    }
                },
                 new MainGroup {
                    Name = "Batteries",
                    Value = "batteries",
                    Selected = false,
                    ProductGroups = new ProductGroup[] {
                        new ProductGroup{Name="Nitro batteries", Value="Nitro", Selected=true},
                        new ProductGroup{Name="Shido batteries", Value="Shido", Selected=false}
                    }
                },
                  new MainGroup {
                    Name = "Filters",
                    Value = "filters",
                    Selected = false,
                    ProductGroups = new ProductGroup[] {
                         new ProductGroup{Name="Ison filters", Value="Ison", Selected=true},
                         new ProductGroup{Name="MIW filters", Value="MIW", Selected=false}
                    }
                  },
                  new MainGroup {
                    Name = "Chains",
                    Value = "chains",
                    Selected = false,
                    ProductGroups = new ProductGroup[] {
                         new ProductGroup{Name="AFAM chains", Value="Chains", Selected=true}
                    }
                  },
                  new MainGroup {
                    Name = "Sprockets",
                    Value = "sprockets",
                    Selected = false,
                    ProductGroups = new ProductGroup[] {
                         new ProductGroup{Name="Front sprockets", Value="FrontSprockets", Selected=true},
                         new ProductGroup{Name="Rear sprockets", Value="RearSprockets", Selected=false}
                    }
                  },
                  new MainGroup {
                    Name = "Transmission",
                    Value = "transmission",
                    Selected = false,
                    ProductGroups = new ProductGroup[] {
                         new ProductGroup{Name="Transmission", Value="Transmission", Selected=true}
                    }
                  }
            };

            SelectedMainGroup = "kits";
            SelectedProductGroups = "AFAM";
            SelectedLanguage = "en";
            ReactAppHidden = true;
        }
    }
}
