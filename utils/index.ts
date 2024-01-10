export const apiHeaders = {
  Authorization: `Bearer ${process.env.API_TOKEN}`,
};

type TextNode = {
  text: string;
};

type ElementNode = {
  type: string;
  children: Node[];
};

type Node = TextNode | ElementNode;

function renderNode(node: Node): string {
  if ('text' in node) {
    return node.text;
  } else if ('children' in node) {
    const childrenHtml = node.children.map(child => renderNode(child)).join('');
    return `<${node.type}>${childrenHtml}</${node.type}>`;
  } else {
    return '';
  }
}

export function convertToHtml(data: Node[]): string {
  return data?.map(item => renderNode(item)).join('');
}
