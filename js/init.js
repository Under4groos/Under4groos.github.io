$(document).ready(() => {



    main();
})
function add( panel ){
    $('.listbox').append( panel  )
}

function main(){

    let v = new Item()
    v.set_price(3)
    v.set_name("Crosshair")
    v.add_image("https://github.com/Under4groos/html_Images/blob/main/Y14zSRqLP1.png?raw=true")
    v.add_image("https://github.com/Under4groos/html_Images/blob/main/Crosshair_bkwxB0Uym7.png?raw=true")
    v.add_image("https://github.com/Under4groos/html_Images/blob/main/Crosshair_E4SQ8P9y7C.png?raw=true")
    v.add_youtube_id("-raie8x2aPk")
    v.add_youtube_id("Xf4C1baSeqI")
    v.add_description_line("Кастомные прицелы в играх? Пффф.... Easy!")
    v.add_description_line("Возможности:")
    v.add_description_line(" - Положение, цвет (вкл. alpha), размер, угол, svg, текст.")
    v.add_description_line("Можно использовать в играх по типу Rust, PUBG, CS и др.")
    add(v.GetPanel());
    
    v = new Item()
    v.set_price(2)
    v.set_name("SBkeyboard")
    v.add_image("https://github.com/Under4groos/html_Images/blob/main/Sbkeyboard_LpwRUQ4Qwr.png?raw=true")
    v.add_image("https://github.com/Under4groos/html_Images/blob/main/VSTrZuJ0rf.png?raw=true")
    v.add_youtube_id("ct8fR00CQXA")
    v.add_description_line("Возможности:")
    v.add_description_line("-Перемещение курсора, клик левой, правой, средней кнопкой мыши, нажатие клавиш.")
    add(v.GetPanel());
  
    v = new Item()
    v.set_price(0)
    v.set_name("AsciiImage")
    v.add_image("https://github.com/Under4groos/html_Images/blob/main/AsciiImage_vn6lmTsd2I.png?raw=true")
    v.add_image("https://github.com/Under4groos/html_Images/blob/main/Code_PhJpTbHRVo.png?raw=true") 
    v.set_dow("https://github.com/Under4groos/AsciiImage/releases/tag/v1.1")
    v.add_description_line("Преобразование изображений в Ascii Art")
    add(v.GetPanel());
    
    v = new Item()
    v.set_price(0)
    v.set_name("Hardware")
    v.add_image("https://github.com/Under4groos/html_Images/blob/main/SCwgCjpFpi.png?raw=true")
    v.set_dow("https://github.com/Under4groos/-Hardware/releases/tag/Hardware")
    v.add_youtube_id("BdTJzjFCA7Y")
    v.add_description_line("Hardware предоставит информацию о вашем компьютере.")
    v.add_description_line("Ниже есть видео как она это делает.")
    add(v.GetPanel());  

    v = new Item()
    v.set_price(0)
    v.set_name("SmdCompile")
    v.add_image("https://github.com/Under4groos/html_Images/blob/main/SmdCompile_7FUiGOkVWw.png?raw=true")
    v.add_description_line("Аналог Сrowbar.")
    add(v.GetPanel());  
    

    v = new Item()
    v.set_price(0)
    v.set_name("UcStylus")
    v.add_image("https://github.com/Under4groos/html_Images/blob/main/IMG_20211019_154023.jpg?raw=true")
    v.add_image("https://github.com/Under4groos/html_Images/blob/main/UcStylus_ZYNfeJHg3V.png?raw=true")
    v.add_description_line("Для проверки стилуса. ")
    add(v.GetPanel());  
}