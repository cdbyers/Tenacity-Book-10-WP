function insertContent(rootElement) {
  rootElement = document.getElementById("pf29");
  rootElement = $(rootElement);
  // Page 35 (39.html)
  const items = [
    {
      type: "video",
      name: "ENG.10.02.18A.mp4",
      position: 710,
      height: 500,
    },
    {
      type: "video",
      name: "ENG.10.02.18A.mp4",
      position: 1200,
      height: 500,
    },
  ];

  const sections = getSections(items);
  const sectionElements = sections.map((section) =>
    getElementsInSection(rootElement, section)
  );

  const image = rootElement.find("img");
  const imageWidth = image.width();
  const imageHeight = image.height();
  const imageSource = image.prop("src");
  image.remove();

  function addImage(section, shiftAmount) {
    shiftAmount = shiftAmount || 0;
    const image = $(document.createElement("img"));
    const top = section.start + shiftAmount;
    const height = (section.end || imageHeight) - section.start;
    image.css({
      position: "absolute",
      top: top + "px",
      width: imageWidth + "px",
      height: height + "px",
      background: `url('${imageSource}')`,
      "background-size": "cover",
      "background-position-y": -section.start + "px",
    });

    rootElement.prepend(image);
  }

  addImage({ start: 0, end: items[0].position });
  let totalContentHeight = 0;

  items.forEach((item, index) => {
    const div = $(document.createElement("div")).css({
      border: "2px solid red",
      width: "100%",
      position: "absolute",
      top: item.position + totalContentHeight + "px",
      height: item.height + "px",
    });

    rootElement.append(div);
    totalContentHeight += item.height;
    shiftElements(sectionElements[index + 1], -totalContentHeight);
    addImage(sections[index + 1], totalContentHeight);
  });

  rootElement.height(rootElement.height() + totalContentHeight);
}

function getSections(content) {
  const positions = content.map((c) => c.position);
  positions.unshift(0);
  const sections = [];

  for (let i = 0; i < positions.length; i++) {
    sections.push({
      start: positions[i],
      end: positions[i + 1],
    });
  }

  return sections;
}

function getElementsInSection(rootElement, section) {
  const baseOffset = rootElement.offset();
  return rootElement.find("div.t").filter(function () {
    const y = $(this).offset().top - baseOffset.top;
    return y > section.start && (section.end === undefined || y <= section.end);
  });
}

function shiftElements(elements, amount) {
  elements.each(function () {
    // Shift element vertically
    let str = $(this).css("bottom");
    str = str.substring(0, str.length - 2);
    const oldPos = Number(str);
    const newPos = oldPos + amount;
    $(this).css("bottom", newPos + "px");
  });
}

insertContent();
