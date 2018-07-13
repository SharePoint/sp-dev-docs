---
title: Understanding how wiki and web part page layouts are mapped to modern page layouts
description: Provides detailed information on the mapping of layouts between source pages and target modern client side pages
ms.date: 07/13/2018
ms.prod: sharepoint
---

# Understanding the layout transformation

Each source page that gets transformed does have a certain layout, typically one of the predefined layouts offered out-of-the-box by SharePoint. When a page is transformed to a modern page the modern page will take over the layout of the source page. The target modern pages do have different layout capabilities, hence it's important to understand how the source page layout is mapped to the target page layout.

## Web Part page layout mapping

Source page layout|Target page layout
:-----|:----------
![full page](media/modernize/layout_wp_fullpage.png)|1 column row
![header, left column, body](media/modernize/layout_wp_h2cleft.png)|1 column row + 2 column row left
![header, right column body](media/modernize/layout_wp_h2cright.png)|1 column row + 2 column row right
![header, footer, 3 columns](media/modernize/layout_wp_hf3c.png)|1 column row + 3 column row + 1 column row
![header, footer, 3 columns, 4 rows](media/modernize/layout_wp_hf4rtoprow.png)|1 column row + 3 column row + 1 column row
![header, footer, 4 columns](media/modernize/layout_wp_hf4ctoprow.png)|1 column row + 3 column row + 1 column row
![left column, header, footer, top row](media/modernize/layout_wp_hf3ctoprowleft.png)|1 column row + 1 column row + 3 column row + 1 column row
![right column, header, footer, top row](media/modernize/layout_wp_hf3ctoprowright.png)|1 column row + 1 column row + 3 column row + 1 column row

## Wiki page layout mapping

Source page layout|Target page layout
:-----|:----------
![full page](media/modernize/layout_wiki_1c.png)|1 column row
![2 columns](media/modernize/layout_wiki_2c.png)|2 column row
![2 columns left](media/modernize/layout_wiki_2cleft.png)|2 column row left
![header, 2 columns](media/modernize/layout_wiki_h2c.png)|1 column row + 2 column row
![header, 2 columns, footer](media/modernize/layout_wiki_hf2c.png)|1 column row + 2 column row + 1 column row
![3 columns](media/modernize/layout_wiki_3c.png)|3 column row
![header, 3 columns](media/modernize/layout_wiki_h3c.png)|1 column row + 3 column row
![header, 3 columns, footer](media/modernize/layout_wiki_hf3c.png)|1 column row + 3 column row + 1 column row

## Overriding the default layout transformation

If for some reason you want to transform layouts differently then you can plug in your own layout transformation component as is shown in below snippet:

```Csharp
public class MyLayout : ILayoutTransformator
{
  private ClientSidePage page;

  public MyLayout(ClientSidePage page)
  {
    this.page = page;
  }

  public void Transform(PageLayout layout)
  {
    // custom layout transformation...add sections to the target page based upon the recieved page layout
    switch (layout)
    {
        case PageLayout.Wiki_OneColumn:
        case PageLayout.WebPart_FullPageVertical:
        case PageLayout.Wiki_Custom:
        case PageLayout.WebPart_Custom:
            {
                page.AddSection(CanvasSectionTemplate.OneColumn, 1);
                return;
            }
        // add more incoming layouts...
        default:
            {
                page.AddSection(CanvasSectionTemplate.OneColumn, 1);
                return;
            }
    }
  }
}

ILayoutTransformator layoutOverride(ClientSidePage cp)
{
    return new MyLayout();
}

// Now use the custom layout transformator
PageTransformationInformation pti = new PageTransformationInformation(page)
{
    // If target page exists, then overwrite it
    Overwrite = true,
    // Callout to your custom layout handler
    LayoutTransformatorOverride = layoutOverride,
};

// Transform the page using the custom layout handled hooked up
pageTransformator.Transform(pti);

```
