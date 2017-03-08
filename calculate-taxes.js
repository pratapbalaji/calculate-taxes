var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];


function calculateSalesTax(salesData, taxRates) {
  // Implement your code here

  var calculatedSalesTaxObject = {};

  for (var companyNumber = 0; companyNumber < salesData.length; companyNumber++) {
    var companyObject = salesData[companyNumber];
    var salesDataCompanyName = companyObject["name"];
    var salesDataProvinceName = companyObject["province"];
    var salesDataSalesArray = companyObject["sales"];
    var salesDataSalesArrayTotal = 0;
    var salesDataSalesTaxRate = 0;
    var salesDataSalesTaxAmount = 0;

    for (var i = 0; i < salesDataSalesArray.length; i++) {
      salesDataSalesArrayTotal = salesDataSalesArrayTotal + salesDataSalesArray[i];
    }

    salesDataSalesTaxRate = taxRates[salesDataProvinceName];

    salesDataSalesTaxAmount = salesDataSalesArrayTotal * salesDataSalesTaxRate;

    if (calculatedSalesTaxObject[salesDataCompanyName] === undefined) {
      calculatedSalesTaxObject[salesDataCompanyName] = {};
      calculatedSalesTaxObject[salesDataCompanyName]["totalSales"] = salesDataSalesArrayTotal;
      calculatedSalesTaxObject[salesDataCompanyName]["totalTaxes"] = salesDataSalesTaxAmount;
    } else {
      calculatedSalesTaxObject[salesDataCompanyName]["totalSales"] += salesDataSalesArrayTotal;
      calculatedSalesTaxObject[salesDataCompanyName]["totalTaxes"] += salesDataSalesTaxAmount;
    }

  }

  console.log(calculatedSalesTaxObject);

}

var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/