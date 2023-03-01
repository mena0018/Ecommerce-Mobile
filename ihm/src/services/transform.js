export default function transform(data) {
  return data.reduce((res, item) => ({ ...res, [item.id]: item }), {});
}
