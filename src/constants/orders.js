export const mockOrders = [
  {
    number: "PO1235664",
    name: "Hats 4 Xmas",
    supplier: "Material +",
    quantity: 1000,
    eta: "12.12.18",
    file: "hats4xmas.pdf",
    status: "pending",
    trackingNumber: null
  },

  {
    number: "PO125764",
    name: "Socks",
    supplier: "Material +",
    quantity: 5000,
    eta: "01.01.19",
    file: "socks.pdf",
    status: "shipped",
    trackingNumber: "MT5554859"
  },
  {
    number: "PO135664",
    name: "Xmas T-shirts",
    supplier: "Material +",
    quantity: 2000,
    eta: "12.03.19",
    file: "xmastshirts.pdf",
    status: "accepted",
    trackingNumber: null
  },
  {
    number: "PO128964",
    name: "Brown Winter Boots",
    supplier: "Material +",
    quantity: 3000,
    eta: "10.12.18",
    file: "socks.pdf",
    status: "readyForShipment",
    trackingNumber: null
  },
  {
    number: "PO235664",
    name: "Caps",
    supplier: "Material +",
    quantity: 8000,
    eta: "11.11.18",
    file: "socks.pdf",
    status: "shipped",
    trackingNumber: "MT3324859"
  },
  {
    number: "PO665664",
    name: "Winter Jackets",
    supplier: "Material +",
    quantity: 2500,
    eta: "22.12.18",
    file: "socks.pdf",
    status: "delivered",
    trackingNumber: "MT5554859"
  }
];

export const mockStatuses = [
  "pending",
  "accepted",
  "readyForShipment",
  "shipped",
  "delivered"
];
