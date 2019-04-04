using AfamBikePartsReact.Controllers;
using AfamBikePartsReact.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Xunit;

namespace AfamBikePartsReactTest
{
    public class HomeControllerUnitTest
    {
        [Fact]
        public void Index_Returns_ViewResult_WithDefaultModel()
        {
            // Arrange
            var controller = new HomeController();

            // Act
            var result = controller.Index();

            // Assert
            var viewResult = Assert.IsType<ViewResult>(result);
            var resultModel = Assert.IsType<HomeViewModel>(viewResult.Model);

            Assert.Equal(3, resultModel.Groups.Length);
            Assert.Equal(3, resultModel.Groups[0].ProductGroups.Length);

            Assert.Equal("Kits", resultModel.Groups[0].Name);
            Assert.True(resultModel.Groups[0].Selected);
            Assert.Equal("Batteries", resultModel.Groups[1].Name);
            Assert.False(resultModel.Groups[1].Selected);

            Assert.Equal("AFAM kits", resultModel.Groups[0].ProductGroups[0].Name);
            Assert.True(resultModel.Groups[0].ProductGroups[0].Selected);
            Assert.False(resultModel.Groups[0].ProductGroups[1].Selected);           
        }

        [Fact]
        public void Index_Returns_ViewResult_WithInjectedModel()
        {
            // Arrange
            var model = new HomeViewModel();

            model.Groups = new MainGroup[] {
                new MainGroup{
                    Name = "Group1",
                    Selected = true,
                    ProductGroups = new ProductGroup[] {
                        new ProductGroup{ Name = "SubGroup1", Selected = true },
                        new ProductGroup{ Name = "SubGroup2", Selected = false }
                    }
                },
                new MainGroup{
                    Name = "Group2",
                    Selected = false,
                    ProductGroups = new ProductGroup[] {
                        new ProductGroup{ Name = "SubGroup3", Selected = true },
                        new ProductGroup{ Name = "SubGroup4", Selected = false }
                    }
                },
            };

            var controller = new HomeController(model);

            // Act
            var result = controller.Index();

            // Assert
            var viewResult = Assert.IsType<ViewResult>(result);
            var resultModel = Assert.IsType<HomeViewModel>(viewResult.Model);

            Assert.Equal(2, resultModel.Groups.Length);
            Assert.Equal(2, resultModel.Groups[0].ProductGroups.Length);
            Assert.Equal(2, resultModel.Groups[1].ProductGroups.Length);

            Assert.Equal("Group1", resultModel.Groups[0].Name);
            Assert.Equal("Group2", resultModel.Groups[1].Name);

            Assert.True(resultModel.Groups[0].Selected);
            Assert.False(resultModel.Groups[1].Selected);

            Assert.Equal("SubGroup1", resultModel.Groups[0].ProductGroups[0].Name);
            Assert.Equal("SubGroup2", resultModel.Groups[0].ProductGroups[1].Name);
            Assert.Equal("SubGroup3", resultModel.Groups[1].ProductGroups[0].Name);
            Assert.Equal("SubGroup4", resultModel.Groups[1].ProductGroups[1].Name);

            Assert.True(resultModel.Groups[0].ProductGroups[0].Selected);
            Assert.False(resultModel.Groups[0].ProductGroups[1].Selected);
            Assert.True(resultModel.Groups[1].ProductGroups[0].Selected);
            Assert.False(resultModel.Groups[1].ProductGroups[1].Selected);           
        }

        [Fact]
        public void Index_Returns_ViewResult_WithActionModel()
        {
            var originalModel = new HomeViewModel();
            originalModel.SelectedMainGroup = "Group1";
            originalModel.Groups = new MainGroup[] {
                new MainGroup{
                    Name = "Group1",
                    Selected = true,
                    ProductGroups = new ProductGroup[] {
                        new ProductGroup{ Name = "SubGroup1", Selected = true, Value = "SubGroup1" },
                        new ProductGroup{ Name = "SubGroup2", Selected = false, Value = "SubGroup2" }
                    },
                    Value = "Group1"
                },
                new MainGroup{
                    Name = "Group2",
                    Selected = false,
                    ProductGroups = new ProductGroup[] {
                        new ProductGroup{ Name = "SubGroup3", Selected = true, Value = "SubGroup3"},
                        new ProductGroup{ Name = "SubGroup4", Selected = false, Value = "SubGroup4"}
                    },
                    Value = "Group2"
                },
            };

            // Arrange            
            var controller = new HomeController(originalModel);

            var newModel = new HomeViewModel();
            newModel.SelectedMainGroup = "Group2";
            newModel.Groups = new MainGroup[] {
                new MainGroup{
                    Selected = false,
                    ProductGroups = new ProductGroup[] {
                        new ProductGroup{ Selected = false},
                        new ProductGroup{ Selected = true }
                    }
                },
                new MainGroup{
                    Selected = true,
                    ProductGroups = new ProductGroup[] {
                        new ProductGroup{ Selected = false },
                        new ProductGroup{ Selected = true }
                    }
                },
            };

            // Act           
            var result = controller.Index(newModel);

            // Assert
            var viewResult = Assert.IsType<ViewResult>(result);
            var resultModel = Assert.IsType<HomeViewModel>(viewResult.Model);

            Assert.Equal(2, resultModel.Groups.Length);
            Assert.Equal(2, resultModel.Groups[0].ProductGroups.Length);
            Assert.Equal(2, resultModel.Groups[1].ProductGroups.Length);

            Assert.Equal("Group1", resultModel.Groups[0].Name);
            Assert.Equal("Group2", resultModel.Groups[1].Name);

            Assert.False(resultModel.Groups[0].Selected);
            Assert.True(resultModel.Groups[1].Selected);

            Assert.Equal("SubGroup1", resultModel.Groups[0].ProductGroups[0].Name);
            Assert.Equal("SubGroup2", resultModel.Groups[0].ProductGroups[1].Name);
            Assert.Equal("SubGroup3", resultModel.Groups[1].ProductGroups[0].Name);
            Assert.Equal("SubGroup4", resultModel.Groups[1].ProductGroups[1].Name);

            Assert.False(resultModel.Groups[0].ProductGroups[0].Selected);
            Assert.True(resultModel.Groups[0].ProductGroups[1].Selected);
            Assert.False(resultModel.Groups[1].ProductGroups[0].Selected);
            Assert.True(resultModel.Groups[1].ProductGroups[1].Selected);
        }
    }
}
