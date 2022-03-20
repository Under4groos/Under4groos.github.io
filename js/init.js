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
    v.add_description_line("Кастомные прицелы в играх? Пффф.... Easy!")
    v.add_description_line("Возможности:")
    v.add_description_line("-прозрачность, смещение, цвет (вкл. alpha), размер, угол, svg, текст и еще многое другое доступно в моей программе.")
    v.add_description_line("Полезно в играх по типу Rust.")
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
    
    v.add_description_line("Преобразование изображений в Ascii Art")
 
    add(v.GetPanel());
    
    
}