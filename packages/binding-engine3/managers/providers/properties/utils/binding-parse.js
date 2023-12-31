async function bindingParse(attr, context, provider) {
  const parts = attr.name.split(".");
  const element = attr.ownerElement;
  const property = parts[0];
  let path = attr.value;
  crs.binding.utils.markElement(element, context);
  element.removeAttribute(attr.name);
  element.setAttribute("data-field", path);
  const uuid = element["__uuid"];
  let intent = crs.binding.eventStore.getIntent("change", uuid);
  if (intent == null) {
    intent = {
      provider,
      value: {},
      dataDef: null
    };
  }
  intent.value[path] = property;
  const event = "change";
  crs.binding.eventStore.register(event, uuid, intent);
  crs.binding.data.setCallback(element["__uuid"], context.bid, [path], provider);
  element.__events ||= [];
  element.__events.push("change");
}
export {
  bindingParse
};
