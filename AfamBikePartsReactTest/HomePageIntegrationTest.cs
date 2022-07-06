using Microsoft.AspNetCore.Mvc.Testing;
using System.Net.Http;
using System.Linq;
using System.Threading.Tasks;
using Xunit;
using System.Collections.Generic;
using AngleSharp.Html.Dom;
using System;

namespace AfamBikePartsReactTest
{
    public class HomePageIntegrationTest : IClassFixture<WebApplicationFactory<AfamBikePartsReact.Startup>>
    {
        private readonly HttpClient client;

        public HomePageIntegrationTest(WebApplicationFactory<AfamBikePartsReact.Startup> factory)
        {
            client = factory.CreateClient();
        }

        [Fact]
        public async Task Get_Home_ReturnsSuccessAndCorrectContentType()
        {
            // Arrange

            // Act
            var response = await client.GetAsync("/Home");

            // Assert
            response.EnsureSuccessStatusCode(); // Status Code 200-299
            Assert.Equal("text/html; charset=utf-8", response.Content.Headers.ContentType.ToString());
        }

        [Fact]
        public async Task Get_Home_ReturnsFormAndDivs()
        {
            // Arrange

            // Act
            var response = await client.GetAsync("/Home");
            var content = await HtmlHelpers.GetDocumentAsync(response);
                       
            // Assert
            Assert.True(content.All.Where(d => d.Id == "mainform").Count() == 1);
            Assert.True(content.All.Where(d => d.Id == "productdiv").Count() == 1);
            Assert.True(content.All.Where(d => d.Id == "languagediv").Count() == 1);
        }

        [Fact]
        public async Task Post_Home_ReturnsProvidedModel()
        {
            // Arrange
            var fields = new Dictionary<string, string> {
                { "SelectedMainGroup", "batteries" },
                {"Groups[0].ProductGroups[0].Selected", "false" },
                {"Groups[0].ProductGroups[1].Selected", "true" },
                {"Groups[0].ProductGroups[2].Selected", "false" },
                {"Groups[1].ProductGroups[0].Selected", "false" },
                {"Groups[1].ProductGroups[1].Selected", "false" },
                {"Groups[2].ProductGroups[0].Selected", "false" },
                {"Groups[2].ProductGroups[1].Selected", "false" },
            };

            var content = new FormUrlEncodedContent(fields);

            // Act
            var response = await client.PostAsync("/Home", content);
            var postContent = await HtmlHelpers.GetDocumentAsync(response);

            // Assert
            Assert.True(HtmlHelpers.GetValueFromRadioGroup(postContent, "SelectedMainGroup") == "batteries");
            Assert.False(HtmlHelpers.IsCheckboxChecked(postContent, "Groups[0].ProductGroups[0].Selected"));
            Assert.True(HtmlHelpers.IsCheckboxChecked(postContent, "Groups[0].ProductGroups[1].Selected"));
            Assert.False(HtmlHelpers.IsCheckboxChecked(postContent, "Groups[0].ProductGroups[2].Selected"));
        }       

    }
}