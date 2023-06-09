import os
import openpyxl
import pandas as pd

id_dict = {}
sheet_name = []
sheet = pd.ExcelFile("/data/tmp/naver/member_ids.xlsx")
# openpyxl를 이용하여 시트명 가져오기
wb = openpyxl.load_workbook(sheet)
for i in wb.get_sheet_names():
    sheet_name.append(i)

# pandas를 이용하여 각 시트별 데이터 가져오기
for i in sheet_name:
    df = pd.read_excel(sheet, i)

    for row in df.values:
        folder_name, member_id, tobe_foldername = row
        id_dict[folder_name] = member_id #폴더 : member_id로 dict 생성.

folder_list = os.listdir("/data/tmp/naver/")

for fd in folder_list:
    if 'conv_' in fd:
        for folder in os.walk("/data/tmp/naver/"+fd):
            if len(folder[0].split('/')) != 6:
                continue
            else:
                fn = folder[0].split('/')[5] #상위 폴더 key값 비교를 위해 split후 5번째 값 가져옴
                id = str(id_dict[fn]) #dict에 있는 id값 가져옴

            num = len(folder[2]) #하위 폴더 개수를 구한 후
            for i in range(num):
                file = folder[2][i] #하위 폴더 이름
                ext = os.path.splitext((file)) #확장자 분리
                os.rename("/data/tmp/naver/"+fd+"/"+fn+"/"+file, "/data/tmp/naver/"+fd+"/"+fn+"/"+file.replace(".","_{}.".format(id))) #하위 폴더에 있는 파일들 + _ + memberid + 확장자로 파일명 변경

            os.rename("/data/tmp/naver/"+fd+"/"+fn, "/data/tmp/naver/"+fd+"/"+fn+'_'+id) #상위 폴더명 변경