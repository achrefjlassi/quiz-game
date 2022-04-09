// ** function that displays the answer key of the test in an external window ** 
function corrige() {
    //var fenetre = window.open("rep_raid.htm","fenetre1","status, scrollbars=yes, resizable=yes, HEIGHT=400, WIDTH=550"); 
    var fenetre = window.open('corrected.html', 'fenetre1', 'width=550,height=400,toolbar=no,location=no, directories=no,status=no,menubar=no,scrollbars=yes,resizable=no');
    var score =0;
    fenetre.creator = window;
}
// **function that reads and tests response values ** 
function testqcm(form) {
    var wintest = window.open('', 'fenetre2', 'width=370,height=250,toolbar=yes,location=no, directories=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes');

    wintest.creator = window;

    //var Contenu = '<HTML><HEAD><TITLE>Correction des questions du QCM</TITLE></HEAD><BODY SCROLL=AUTO LEFTMARGIN=60><H3>fghfghfhgfhgfhgfgh</body></html>';
    //wintest.document.write(Contenu); 
    function counter(init){
        var i = init;
        return function (){
            i=i+1;
            return i;
        }
    }
    var count = counter(0)
    

    //Outer window header 
    var Contenu = '<html><head><title>Correction of QCM questions</title>';
    Contenu +='<link href="questionnairecorrected.css" rel ="stylesheet">'
    Contenu +='</head>'
    Contenu += '<body scroll=AUTO leftmargin=60>';
    Contenu += ' <p>&nbsp;</p><h3>Dynamic correction of the test</h3>';
    Contenu +='<hr>';
    Contenu += '<font size=4>';
    // question test 1 
    if ((form1.question1[1].checked == true) && (form1.question1[1].value == 'B') && (form1.question1[0].checked == false) && (form1.question1[2].checked == false) && (form1.question1[3].checked == false)){
        
        Contenu += '<p><li id="Q">The answer to question 1 is <u>correct</u>.</li></p>';
        count();
    }

    else { Contenu += '<p><li id="Q">The answer to question 1 is incorrect.</li></p>'; }

    //question test 2
    if ((form1.question2[1].checked == true) && (form1.question2[1].value == 'B') && (form1.question2[0].checked == false) && (form1.question2[2].checked == false) && (form1.question2[3].checked == false))  {
   
          Contenu += '<p><li id="Q">The answer to question 2 is <u>correct</u>.';
          count();
         
    }
        
    else { Contenu += '<p><li id="Q">The answer to question 2 is incorrect.'; }

    // question test 3
    if ((form1.question3[1].checked == true) && (form1.question3[1].value == 'B') && (form1.question3[3].checked == false) && (form1.question3[2].checked == false) && (form1.question3[0].checked == false)) {
   
         Contenu += '<p><li id="Q">The answer to question 3 is <u>correct</u>.';
         count();
        
    }
    else { Contenu += '<p><li id="Q">The answer to question 3 is incorrect.'; }

    // question test 4
    if ((form1.question4[3].checked == true) && (form1.question4[3].value == 'D') && (form1.question4[0].checked == false) && (form1.question4[2].checked == false) && (form1.question4[1].checked == false)) {

   
         Contenu += '<p><li id="Q">The answer to question 4 is <u>correct</u>.</li></p>';
         count();
        
    }
    else { Contenu += '<p><li id="Q">The answer to question 4 is incorrect.'; }

    //question test 5
    if ((form1.question5[1].checked == true) && (form1.question5[1].value == 'B') && (form1.question5[3].checked == false) && (form1.question5[2].checked == false) && (form1.question5[0].checked == false)) {

         Contenu += '<p><li id="Q">The answer to question 5 is <u>correct</u>.';
        
    }
    else { Contenu += '<p><li id="Q">The answer to question 5 is  incorrect.'; }

    // question test 6
    if ((form1.question6[3].checked == true) && (form1.question6[3].value == 'D') && (form1.question6[0].checked == false) && (form1.question6[2].checked == false) && (form1.question6[1].checked == false)){
    
         Contenu += '<p><li id="Q">The answer to question 6 is <u>correct</u>.';
        
    }
        
    else { Contenu += '<p><li id="Q">The answer to question 6 is  incorrect.'; }

    // question test 7
    if ((form1.question7[2].checked == true) && (form1.question7[2].value == 'C') && (form1.question7[3].checked == false) && (form1.question7[1].checked == false) && (form1.question7[0].checked == false)) {
   
        Contenu += '<p><li id="Q">The answer to question 7 is <u>correct</u>.';
       
    }
         
    else { Contenu += '<p><li id="Q">The answer to question 7 is incorrect.'; }

    // question test 8
    if ((form1.question8[2].checked == true) && (form1.question8[2].value == 'C') && (form1.question8[3].checked == false) && (form1.question8[0].checked == false) && (form1.question8[1].checked == false)){
      
         Contenu += '<p><li id="Q">The answer to question 8 is <u>correct</u>.';

    }
    else { Contenu += '<p><li id="Q">The answer to question 8 is incorrect.'; }

    // question test 9
    if ((form1.question9[3].checked == true) && (form1.question9[3].value == 'D') && (form1.question9[2].checked == false) && (form1.question9[1].checked == false) && (form1.question9[0].checked == false)) {
   
         Contenu += '<p><li id="Q">The answer to question 9 is <u>correct</u>.';
       
    }
        
    else { Contenu += '<p><li id="Q">The answer to question 9 is incorrect.'; }

    // question test 10
    if ((form1.question10[2].checked == true) && (form1.question10[2].value == 'C') && (form1.question3[3].checked == false) && (form1.question1[1].checked == false) && (form1.question1[0].checked == false)) {
   
        Contenu += '<p><li id="Q">The answer to question 10 is <u>correct</u>.';
        
    }
         
    else { Contenu += '<p><li id="Q">The answer to question 10 is incorrect.'; }


    //Bottom of the external window

    Contenu += '</font>';
    Contenu += '<center><form><input class="bottom" TYPE= button VALUE= OK Onclick=self.close()></form>';
    Contenu += '</center></body></html>';
    wintest.document.write(Contenu);
    
}



