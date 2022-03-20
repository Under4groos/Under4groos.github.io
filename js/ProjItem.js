class Item{
    constructor(){
        this.images_link = [];
        this.youtube_link = [];
        this.descriptions = [];
        this.name_proj = "null";
        // цена 
        this.price = 0;
        //
        this.text_button_ = "Buy the product"

        
    }
    set_price( int ){
        this.price = int;
    }
    set_name(str_){
        this.name_proj = str_;
    }
    set_description(str_desc ){
        this.description = str_desc;
    }
    add_image(str_url){
        this.images_link.push(str_url);
    }
    add_youtube_id(str_id){
        this.youtube_link.push(str_id);
    }
    add_description_line(str_){
        this.descriptions.push(str_);
    }
    // return html 
    GetPanel(){
        let l = this.gethtmlcode();
        l = l.replace("_proj_name_", this.name_proj);  
        if(this.price >0){
            l = l.replace("_Price_", "Price: " + this.price + "$");
            l = l.replace("_button_Buy_", this.text_button_);
            l = l.replace("_func_open_", "open_vk()");
            
        }else{
            l = l.replace("_Price_", "");
            l = l.replace("_button_Buy_", "Download");
            l = l.replace("_func_open_", "open_drive_google()");
        }
        
        let str_urls = "";
        for (let index = 0; index < this.descriptions.length; index++) {
            const element = this.descriptions[index];
            str_urls = str_urls +  this.getdesctext(element) 
        }


        l = l.replace("_description_", str_urls);
        // images and YouTube
        //--------------------------------------------------------------
        str_urls = "";
        for (let index = 0; index < this.images_link.length; index++) {
            const element = this.images_link[index];
            str_urls = str_urls +  this.getimage(element) 
        }
        l = l.replace("_images_urls_", str_urls);
        str_urls = "";
        //--------------------------------------------------------------
        for (let index = 0; index < this.youtube_link.length; index++) {
            const element = this.youtube_link[index];
            str_urls = str_urls +  this.getyoutube(element) 
        }
        l = l.replace("_youtube_urls_", str_urls);
        
        return l
    }

    getdesctext(str_){
        return "<p>_description_</p>".replace("_description_", str_);
    }
    getimage(str_url){
        return " <img class=\"imgs\" src=\"_url_\"  onClick=\"view(\'_url_\')\">".replace("_url_", str_url).replace("_url_", str_url);
    }
    getyoutube(str_id){
        // <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/-raie8x2aPk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        // <iframe width="560" height="315" src="https://www.youtube.com/embed/vzwDSssMes8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        return "<iframe src=\"https://www.youtube-nocookie.com/embed/_id_video_\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>".replace("_id_video_", str_id);
    }
    gethtmlcode(){
const htmlString = 
`
<div class="panel_item">
    <div class="content">      
         <div class="div_cm" >
             <h2 >
                 <a class="a_37" >_proj_name_</a>
             </h2>
             <ul >
                 <li class="li_s">
                     <a>by</a>
                     <a>UnderKo</a>                                   
                     <a>_Price_</a>
                 </li>
             </ul>
             <div class="div_cm_width">
                _description_  
             </div>
         </div>
         <div class="div_m_20b">
             
            _images_urls_
         </div>
         <div class="div_m_20b">
            _youtube_urls_
         </div>
         <div class="div_m_50b">
           <button onclick="_func_open_">_button_Buy_</button>
         </div>
    </div>
 </div>
`;
return htmlString
    }

}