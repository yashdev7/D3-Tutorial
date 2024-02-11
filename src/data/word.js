const data = [
    {
      name: 'How the Word Cloud Generator Works',
      children: [
        { name: 'The layout algorithm for positioning words without overlap is available on GitHub under an open source license as d3-cloud. Note that this is the only the layout algorithm and any code for converting text into words and rendering the final output requires additional development.' },
        { name: 'As word placement can be quite slow for more than a few hundred words, the layout algorithm can be run asynchronously, with a configurable time step size. This makes it possible to animate words as they are placed without stuttering. It is recommended to always use a time step even without animations as it prevents the browser’s event loop from blocking while placing the words.' },
        { name: 'The layout algorithm itself is incredibly simple. For each word, starting with the most “important”:' },
        { name: 'Attempt to place the word at some starting point: usually near the middle, or somewhere on a central horizontal line.' },
        { name: 'If the word intersects with any previously placed words, move it one step along an increasing spiral. Repeat until no intersections are found.' },
        { name: 'The hard part is making it perform efficiently! According to Jonathan Feinberg, Wordle uses a combination of hierarchical bounding boxes and quadtrees to achieve reasonable speeds.' }
      ]
    },
    {
      name: 'Glyphs in JavaScript',
      children: [
        { name: 'There is not a way to retrieve precise glyph shapes via the DOM, except perhaps for SVG fonts. Instead, we draw each word to a hidden canvas element, and retrieve the pixel data.' },
        { name: 'Retrieving the pixel data separately for each word is expensive, so we draw as many words as possible and then retrieve their pixels in a batch operation.' }
      ]
    },
    {
      name: 'Sprites and Masks',
      children: [
        { name: 'My initial implementation performed collision detection using sprite masks. Once a word is placed, it does not move, so we can copy it to the appropriate position in a larger sprite representing the whole placement area.' },
        { name: 'The advantage of this is that collision detection only involves comparing a candidate sprite with the relevant area of this larger sprite, rather than comparing with each previous word separately.' },
        { name: 'Somewhat surprisingly, a simple low-level hack made a tremendous difference: when constructing the sprite I compressed blocks of 32 1-bit pixels into 32-bit integers, thus reducing the number of checks (and memory) by 32 times.' },
        { name: 'In fact, this turned out to beat my hierarchical bounding box with quadtree implementation on everything I tried it on (even very large areas and font sizes). I think this is primarily because the sprite version only needs to perform a single collision test per candidate area, whereas the bounding box version has to compare with every other previously placed word that overlaps slightly with the candidate area.' },
        { name: 'Another possibility would be to merge a words tree with a single large tree once it is placed. I think this operation would be fairly expensive though compared with the analogous sprite mask operation, which is essentially ORing a whole block.' }
      ]
    }
  ];
  
  export default data;
  