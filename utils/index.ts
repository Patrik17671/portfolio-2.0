export const apiHeaders = {
  Authorization: `Bearer ${process.env.API_TOKEN}`,
};

function renderNode(node) {
  if ('text' in node) {
    return node.text;
  } else if ('type' in node && 'children' in node) {
    const childrenHtml = node.children?.map(child => renderNode(child)).join('');
    return `<${node.type}>${childrenHtml}</${node.type}>`;
  } else {
    return `<p>${node.children?.map(child => renderNode(child)).join('')}</p>`;
  }
}

export function convertToHtml(data) {
  return data?.map(item => renderNode(item)).join('');
}
