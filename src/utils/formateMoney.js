const formater = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function formateMoney(cents) {
  return formater.format(cents / 100);
}
