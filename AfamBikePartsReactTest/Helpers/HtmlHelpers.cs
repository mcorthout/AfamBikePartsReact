using AngleSharp;
using AngleSharp.Dom;
using AngleSharp.Html.Dom;
using AngleSharp.Io;
using System;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading;
using System.Threading.Tasks;

namespace AfamBikePartsReactTest
{
    public class HtmlHelpers
    {
        public static async Task<IHtmlDocument> GetDocumentAsync(HttpResponseMessage response)
        {
            var content = await response.Content.ReadAsStringAsync();
            var document = await BrowsingContext.New().OpenAsync(ResponseFactory, CancellationToken.None);
            return (IHtmlDocument)document;

            void ResponseFactory(VirtualResponse htmlResponse)
            {
                htmlResponse
                    .Address(response.RequestMessage.RequestUri)
                    .Status(response.StatusCode);

                MapHeaders(response.Headers);
                MapHeaders(response.Content.Headers);

                htmlResponse.Content(content);

                void MapHeaders(HttpHeaders headers)
                {
                    foreach (var header in headers)
                    {
                        foreach (var value in header.Value)
                        {
                            htmlResponse.Header(header.Key, value);
                        }
                    }
                }
            }
        }

        public static string GetValueFromRadioGroup(IDocument document, string groupName)
        {
            var inputs = document.GetElementsByTagName("INPUT").Cast<IHtmlInputElement>();
            var radio = inputs.Where(e => e.Name == groupName && e.HasAttribute("checked")).First();
            return radio.Value;           
        }


        public static bool IsCheckboxChecked(IDocument document, string checkboxName)
        {
            var inputs = document.GetElementsByTagName("INPUT").Cast<IHtmlInputElement>();
            var checkbox = inputs.Where(e => e.Name == checkboxName).First();
            return checkbox.IsChecked;
        }
    }
}
