var zet=0;
            function apear1(zet){
                if(zet==1){
                var m = document.getElementById('hvr')
                 m.innerHTML='<p class="informtxt">wanderley@americaglobal.net</p>'
                }
                else {
                var m = document.getElementById('hvr')
                 m.innerHTML='<p></p>'
                }
                
            }
            function apear2(zet){
                if(zet==1){
                var m = document.getElementById('hvr')
                 m.innerHTML='<p class="informtxt">(11) 98882-7960</p>'
                }
                else {
                var m = document.getElementById('hvr')
                 m.innerHTML='<p></p>'
                }
            }
            function apear3(zet){
                if(zet==1){
                var m = document.getElementById('hvr')
                 m.innerHTML='<p class="informtxt">(11) 988827960</p>'
                }
                else {
                var m = document.getElementById('hvr')
                 m.innerHTML='<p></p>'
                }
            }
            function apear4(zet){
                if(zet==1){
                var m = document.getElementById('hvr')
                 m.innerHTML='<p class="informtxt">INDISPONIVEL NO MOMENTO</p>'
                }
                else {
                var m = document.getElementById('hvr')
                 m.innerHTML='<p></p>'
                }
            }
$('#emaili').click(function(){
        //Visto que o 'copy' copia o texto que estiver selecionado, talvez você queira colocar seu valor em um txt escondido
    $('#emails').select();
    try {
            var ok = document.execCommand('copy');
            if (ok) { alert('Texto copiado para a área de transferência'); }
        } catch (e) {
        alert(e)
    }
});
$('#telefonei').click(function(){
        //Visto que o 'copy' copia o texto que estiver selecionado, talvez você queira colocar seu valor em um txt escondido
    $('#telefone').select();
    try {
            var ok = document.execCommand('copy');
            if (ok) { alert('Texto copiado para a área de transferência'); }
        } catch (e) {
        alert(e)
    }
});
