# nc_soft
color_code = {
    '1': ["#800000", "#8B0000", "#A52A2A", "#B22222", "#DC143C", "#FF0000", "#FF6347",
          "#FF7F50", "#CD5C5C", "#F08080"],  # 사람
    '2': ["#E9967A", "#FA8072", "#FFA07A", "#FF4500", "#FF8C00", "#FFA500", "#FFD700",
          "#B8860B", "#DAA520", "#EEE8AA"],  # 의자
    '3': ["#BDB76B", "#F0E68C", "#808000", "#FFFF00", "#9ACD32", "#556B2F", "#6B8E23",
          "#7CFC00", "#7FFF00", "#ADFF2F"],  # 액자
    '4': ["#006400", "#008000", "#228B22", "#00FF00", "#32CD32", "#90EE90", "#98FB98",
          "#8FBC8F", "#00FA9A", "#00FF7F"],  # 문
    '5': ["#2E8B57", "#66CDAA", "#3CB371", "#20B2AA", "#2F4F4F", "#008080", "#008B8B",
          "#00FFFF", "#00FFFF", "#E0FFFF"],  # 소파
    '6': ["#00CED1", "#40E0D0", "#48D1CC", "#AFEEEE", "#7FFFD4", "#B0E0E6", "#5F9EA0",
          "#4682B4", "#6495ED", "#00BFFF"],  # 창문
    '7': ["#1E90FF", "#ADD8E6", "#87CEEB", "#87CEFA", "#191970", "#000080", "#00008B",
          "#0000CD", "#0000FF", "#4169E1"],  # 핸드폰
    '8': ["#8A2BE2", "#4B0082", "#483D8B", "#6A5ACD", "#7B68EE", "#9370DB", "#8B008B",
          "#9400D3", "#9932CC", "#BA55D3"],  # 반려동물
    '9': ["#800080", "#D8BFD8", "#DDA0DD", "#EE82EE", "#FF00FF", "#DA70D6", "#C71585",
          "#DB7093", "#FF1493", "#FF69B4"]  # 에어컨
}

grey_scale_code = {
    '1': ["#d4d4d4", "#d4d5d4", "#d3d3d2", "#d6d4d5", "#d9dad9", "#d5dadb", "#d1d7d8",
          "#d9dad9", "#d3d3d3", "#d1d5d4"],  # 사람
    '2': ["#d3dbe0", "#d0d8d9", "#bbc6c9", "#bfc9d0", "#c9ced3", "#b9c5d3", "#c8c8c8",
          "#c4cdca", "#d0d1d0", "#d0d1d0"],  # 의자
    '3': ["#acadad", "#a6a6a0", "#acadac", "#b0afb1", "#b1b0ae", "#abacaa", "#acb0af",
          "#a9aaab", "#b4b1b2", "#b0b2b4"],  # 액자
    '4': ["#e8e9e8", "#888887", "#888786", "#858685", "#848585", "#858787", "#858483",
          "#8d8d8d", "#848683", "#878986"],  # 문
    '5': ["#6d7070", "#727372", "#6b6c6c", "#696d6e", "#6d7371", "#777775", "#737575", "#777a7a",
          "#747878", "#757679"],  # 소파
    '6': ["#e9eaea", "#e9ebeb", "#eae7e8", "#e7e9e7", "#e5e6e8", "#e5e6e8", "#e6e6e7",
          "#d9ddda", "#eaeae7", "#e0e3e3"],  # 창문
    '7': ["#b7b7b8", "#b5b6b6", "#b8b8b6", "#b5b5b5", "#aaaeac", "#bab7b7", "#b9b8b6",
          "#b9b9bb", "#bbbbb9", "#b3b6b5"],  # 핸드폰
    '8': ["#5c5d5d", "#616163", "#5e5f5d", "#5b5c5a", "#5b5b5d", "#686a6b", "#595d5c",
          "#5e6260", "#5e6164", "#5f6568"],  # 반려동물
    '9': ["#393939", "#3b3b3b", "#353535", "#3d3d3e", "#36373c", "#3b393a", "#3f3d39",
          "#373735", "#373434", "#3a3c3d"]  # 에어컨
}

img = Image.open(localDownloadDefaultPath + file_name)
tImg = Image.open(localDownloadDefaultPath + file_name)
gImg = Image.open(localDownloadDefaultPath + file_name)
img_size = img.size

t_img = ImageDraw.Draw(tImg) #temp image.
g_img = ImageDraw.Draw(gImg) #grey scale image
p_img = ImageDraw.Draw(img)

g_img.rectangle((0,0,img_size), fill = 'black') #grey sclae image의 배경을 위해 일단 검정색으로 채움

for object in rVal['result_data'][labelKey]:
    type = object['name_7ADUUA'] #class 넘버 확인
    for instance in object['name_ONJXF3']: #option 값으로 instacne 구분
        if instance != False:
            instance = int(instance)
            break
    if type == '10':
        draw_color = "black"
        gdraw_color = "black"
    else:
        draw_color = color_code[type][instance - 1] #class 넘버의 키값을 가진 instance번째 색상으로 설정
        gdraw_color = grey_scale_code[type][instance-1] #class 넘버의 키값을 가진 instance번째 색상으로 설정

    polygon_list = [(point["x"], point["y"]) for point in object['points']]
    # 폴리곤 좌표에 맞춰서 선으로 그려줌. 맨 처음 점이랑 맨 뒤의 점을 이어서 연결.
    p_img.line(polygon_list, fill=draw_color, width=7)
    p_img.line([polygon_list[0],polygon_list[-1]], fill=draw_color, width=7)

    for point in polygon_list:
        p_img.ellipse([point[0]-3, point[1]-3, point[0]+3, point[1]+3], fill='black') #polygon 모양대로 점을 그려줌.

    g_img.polygon(polygon_list, fill=gdraw_color) #grey scale로 그려줌.
    t_img.polygon(polygon_list, fill=draw_color) #클래스 별 색에 맞춰서 그려줌.

img.save(localDownloadDefaultPath + 'polygon_image_' + file_name.split('.')[0] + '.png' )
gImg.save(localDownloadDefaultPath + 'grey_scale_segmetation_' + file_name.split('.')[0] + '.png')
gImg.close() #grey scale image 완료

tImg.save(localDownloadDefaultPath + 't_' + file_name)

bImage = Image.blend(img, tImg, 0.7) #blend

bImage.save(localDownloadDefaultPath + 'b_' + file_name)
img.close()

os.remove(localDownloadDefaultPath + file_name) #원본 image 삭제

mask = Image.new('L', img_size, 0) #mask image 생성
black = Image.new('RGB', img_size, 0) #검은 image 생성. mode를 RGB로 해주어야 색을 인식하나봄.
draw = ImageDraw.Draw(mask)

for object in rVal['result_data'][labelKey]:
    polygon_list = [(point["x"], point["y"]) for point in object['points']]

    draw.polygon(polygon_list, fill=255) #mask image에 polygon이 그려진 mask이미지 생성.

iImg = Image.composite(bImage, black, mask) #blend된 crop부분을 mask의 하얀 부분에 씌움.
iImg.save(localDownloadDefaultPath + 'instance_segmentation_' + file_name.split('.')[0] + '.png')

bImage.close()