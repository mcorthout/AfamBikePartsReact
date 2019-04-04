using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using AfamBikePartsReact.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace AfamBikePartsReact.Controllers
{
    public class HomeController : Controller
    {
        private HomeViewModel model { get; set; }

        public HomeController(HomeViewModel viewmodel = null)
        {
            model = viewmodel ?? new HomeViewModel();
        }

        public IActionResult Index()
        {              
            return View(model);
        }

        [HttpPost]
        public IActionResult Index(HomeViewModel newModel)
        {
            if (ModelState.IsValid && newModel != null)
            {
                for (int i = 0; i < model.Groups.Length; i++)
                {
                    model.Groups[i].Selected = newModel.Groups[i].Selected;

                    for (int j = 0; j < model.Groups[i].ProductGroups.Length; j++)
                    {
                        model.Groups[i].ProductGroups[j].Selected = newModel.Groups[i].ProductGroups[j].Selected;
                    }
                }

                model.SelectedMainGroup = newModel.SelectedMainGroup ?? "kits";

                model.SelectedLanguage = newModel.SelectedLanguage ?? "en";

                var selections = model
                    .Groups
                    .Where(p => p.Value == model.SelectedMainGroup)
                    .FirstOrDefault()
                    .ProductGroups
                    .Where(p => p.Selected)
                    .Select(p => p.Value);

                model.SelectedProductGroups = string.Join(',', selections);

                model.ReactAppHidden = model.SelectedProductGroups == "";
            }

            return View(model);
        }

        public IActionResult Error()
        {
            ViewData["RequestId"] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
            return View();
        }
    }
}
