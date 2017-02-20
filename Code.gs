function myFunction() {
  var form = FormApp.create('GameForm').setLimitOneResponsePerUser(true);
  var item = form.addCheckboxItem();
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var choices =  item.getChoices();
  choices.pop();
  item.setTitle('Choices?');
  for (var i = 0; i < data.length; i++)
  {
    choices.push(item.createChoice(data[i][0]));
  }
  item.setChoices(choices);
  Logger.log('Published URL: ' + form.getPublishedUrl());
  Logger.log('Editor URL: ' + form.getEditUrl());
}
