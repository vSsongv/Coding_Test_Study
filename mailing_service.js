// 견적서를 다 다르게 작성하는데 데이터가 모이지를 않으니까, 데이터를 관리할 수 있게 드라이브에 업로드하는 방법을 생각.   
// 그리고 견적서를 받아야 하는 업체에 견적서를 보내야 하니까 자동 메일링 방법 채택.
// 사업관리팀의 도움요청

function sheetName() {
  return SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getName();
}
function onOpen() {
    var ui = SpreadsheetApp.getUi();
    // Or DocumentApp or FormApp.
    ui.createMenu('견적서 메일링')
        .addItem('이메일보내기', 'sendmail')
        .addToUi();
}
function sendmail() {
      const ss = SpreadsheetApp.getActiveSpreadsheet();
      var sheetId = ss.getId();
      var sheetnumber = ss.getSheetId();
    // 문서이름
    var docName = ss.getActiveSheet().getRange("L4").getValue().toString()
    const email  = ss.getActiveSheet().getRange("H11").getValue().toString();
    const myEmail  = ss.getActiveSheet().getRange("H12").getValue().toString();
    // 문서확인, 나중에 다른 문서로 확장
      if (docName.includes("견적서") )
      {
        var gidName = '&gid=' + sheetnumber
        }
        else {
        Browser.msgBox(docName + '문서를 확인해주세요!');
        return;
        }
    // 문서출력 옵션
      var exportOptions =
        'exportFormat=pdf&format=pdf' + // pdf로 보내기
        '&size=A4' + // 종이 size A4
        '&portrait=true' + // true : 세로, false : 가로
        '&fitw=true' + // 폭에 맞춤 :  false, 실제 사이즈
        '&range=d1:j65'+
        '&sheetnames=false&printtitle=false' + // 헤더 풋터 출력 : false
        '&pagenumbers=false&gridlines=false' + // 페이지 번호, 그리드 라인 : false
        '&fzr=false' + // 열 헤더 반복 : false
        gidName ; // 시트 Id.
  
      const colL = ["L10","L11","L12","L13","L14","L15","L16","L17","L18","L19","L20"]
      const subject = ss.getActiveSheet().getRange("L8").getValue().toString();
      let body = ss.getActiveSheet().getRange(colL[0]).getValue().toString() + '<br>';
      for(var i = 1; i < 11; i ++)
      {
        body += ss.getActiveSheet().getRange(colL[i]).getValue().toString() + '<br>';
      }
      const url = 'https://docs.google.com/spreadsheets/d/' + sheetId + '/export?';
      var params = {method:"GET",headers:{"authorization":"Bearer "+ ScriptApp.getOAuthToken()}};
    //  PDF 생성
      var response = UrlFetchApp.fetch(url+exportOptions, params).getBlob();
    // 이메일 발송
      var emails = [myEmail , email].join(',');
    // PDF 파일 첨부, Email로 발송 됨
          GmailApp.sendEmail(emails, subject, body,  {
          htmlBody: body,
          attachments: [{
                fileName: docName,
                content: response.getBytes(),
                mimeType: "application/pdf"
            }]
        });
    // 발송 메일을 저장 할 드라이브 폴더 지정(이곳에 PDF파일이 모여지게 됩니다.)
      var folder = DriveApp.getFolderById('1Hn8Kx_qajOdAQL5QHnHUGxnorgklibhc');
      if( docName+'.pdf' )
      var savePDF = folder.createFile(response);
          savePDF.setName(docName) + '.pdf';
      var title = '견적서 PDF파일을 첨부하여 이메일 보내고, 공유폴더(견적서)에도 저장하였습니다';
      SpreadsheetApp.getUi().alert( title );
}
