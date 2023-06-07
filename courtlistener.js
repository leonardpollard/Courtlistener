const csv = ["Case Name" + ';' + "Docket Number" + ';' + "Docket ID" + ';' +  "Date Filed" + ';' + "Date Terminated" + ';' + "Court" + ';' + "Assigned to" + ';' + "Attorney" + ';' + "Attorney ID" + ';' + "Firm" + ';' + "Firm ID" + ';' + "Is Available" + ';' + "Nature of Suit" + ';' + "Short Description" + ';' + "Absolute URL"]
for (let page = 2500; page <= 3000; page++) {
  const getData = async () => {
    const response = await fetch(`https://www.courtlistener.com/api/rest/v3/search/?format=json&page=${page}&nature_of_suit=446&type=d`);
    const myJson = await response.json();
    myJson.results.map(it => {
      csv.push(it.caseName + ';' + it.docket_Number + ';' + it.docket_id + ';' + it.dateFiled + ';' + it.dateTerminated + ';' + it.court + ';' + it.assignedTo + ';' + it.attorney + ';' + it.attorney_id + ';' + it.firm + ';' + it.firm_id + ';' + it.is_available + ';' + it.suitNature + ';' + it.short_description + ';' + it.absolute_URL)

    })
    console.log(csv.join('\n'))
  }
  getData()}