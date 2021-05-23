'use strict';

var genikoSynolo=0;

    function KEBEckecked() {
        var checkBox = document.getElementById("ΚΕΒΕ");
        var list = document.getElementById("Ρωμαϊκά-Ολλανδικά");
        if (checkBox.checked == true){
          list.style.display = "block";
        } else {
           list.style.display = "none";
        }
      }

      function KEBEromaikackecked() {
        var checkBox = document.getElementById("ΡωμαϊκάKEBE");
        var list = document.getElementById("ΡωμαϊκάK");
        if (checkBox.checked == true){
          list.style.display = "block";
        } else {
           list.style.display = "none";
        }
      }

      function KEBEolandikackecked() {
        var checkBox = document.getElementById("ΟλλανδικάKEBE");
        var list = document.getElementById("ΟλλανδικάΚ");
        if (checkBox.checked == true){
          list.style.display = "block";
        } else {
           list.style.display = "none";
        }
      }

      function SynoloKEBErom() {
        var x = document.getElementById("ΡωμαϊκάKer").value;
        document.getElementById("timh1a").innerHTML = (x*0.45).toFixed(2);
        GenikoSynolo(x*0.45);
      
      }

      function SynoloKEBEol() {
        var x = document.getElementById("ΟλλανδικάKer").value;
        document.getElementById("timh1b").innerHTML = (x*0.45).toFixed(2);
        GenikoSynolo(x*0.45);
      }

      function XALKISckecked() {
        var checkBox = document.getElementById("XALKIS");
        var list = document.getElementById("Ρωμαϊκά-Ολλανδικά-XALKIS");
        if (checkBox.checked == true){
          list.style.display = "block";
        } else {
           list.style.display = "none";
        }
      }

      function XALKISromaikackecked() {
        var checkBox = document.getElementById("ΡωμαϊκάXALKIS");
        var list = document.getElementById("ΡωμαϊκάX");
        if (checkBox.checked == true){
          list.style.display = "block";
        } else {
           list.style.display = "none";
        }
      }

      function XALKISolandikackecked() {
        var checkBox = document.getElementById("ΟλλανδικάXalkis");
        var list = document.getElementById("ΟλλανδικάX");
        if (checkBox.checked == true){
          list.style.display = "block";
        } else {
           list.style.display = "none";
        }
      }

      function SynoloXALKISrom() {
        var x = document.getElementById("ΡωμαϊκάXker").value;
        document.getElementById("timh2a").innerHTML = (x*0.50).toFixed(2);
        GenikoSynolo(x*0.50);
      }

      function SynoloXALKISol() {
        var x = document.getElementById("ΟλλανδικάXker").value;
        document.getElementById("timh2b").innerHTML = (x*0.50).toFixed(2);
        GenikoSynolo(x*0.50);
      }

      function changeImage() {
        if(document.getElementById('check1').checked)
          document.getElementById('a').src='kokkino.jpg';
        else if(document.getElementById('check2').checked)
          document.getElementById('a').src='xalkino.jpg';
        else if(document.getElementById('check3').checked)
          document.getElementById('a').src='prasino.jpg';
      }

      function ΠΕΛΕΚΗΤΑckecked() {
        var checkBox = document.getElementById("ΠΕΛΕΚΗΤΑ");
        var list = document.getElementById("pelekitaID");
        if (checkBox.checked == true){
            list.style.display = "block";
        } else {
            list.style.display =  "none";
        }
      }

      function SynoloΠΕΛΕΚΗΤΑ() {
        var x = document.getElementById("ΠΕΛΕΚΗΤΑid").value;
        document.getElementById("timhΠΕΛΕΚΗΤΑ").innerHTML = (x*250);
        GenikoSynolo(x*250);
      }

      function ΠΡΙΣΤΑckecked() {
        var checkBox = document.getElementById("ΠΡΙΣΤΑ");
        var list = document.getElementById("pristaID");
        if (checkBox.checked == true){
            list.style.display = "block";
        } else {
            list.style.display =  "none";
        }
      }

      function SynoloΠΡΙΣΤΑ() {
        var x = document.getElementById("ΠΡΙΣΤΑid").value;
        document.getElementById("timhΠΡΙΣΤΑ").innerHTML = (x*240);
        GenikoSynolo(x*240);
      }

      function ΚΑΔΡΟΝΙΑckecked() {
        var checkBox = document.getElementById("ΚΑΔΡΟΝΙΑ");
        var list = document.getElementById("kadroniaID");
        if (checkBox.checked == true){
            list.style.display = "block";
        } else {
            list.style.display =  "none";
        }
      }
      function SynoloΚΑΔΡΟΝΙΑ() {
        var x = document.getElementById("ΚΑΔΡΟΝΙΑid").value;
        document.getElementById("timhΚΑΔΡΟΝΙΑ").innerHTML = (x*240);
        GenikoSynolo(x*240);
      }

      function ΚΑΔΡΟΝΙΑckecked() {
        var checkBox = document.getElementById("ΚΑΔΡΟΝΙΑ");
        var list = document.getElementById("kadroniaID");
        if (checkBox.checked == true){
            list.style.display = "block";
        } else {
            list.style.display =  "none";
        }
      }

      function SynoloΒΙΟΜΠΛΟΚ() {
        var x = document.getElementById("ΒΙΟΜΠΛΟΚkeramidia").value;
        document.getElementById("timhΒΙΟΜΠΛΟΚ").innerHTML = (x*0.73).toFixed(2);
        GenikoSynolo(x*0.73);
      }

      function ΒΙΟΜΠΛΟΚckecked() {
        var checkBox = document.getElementById("ΒΙΟΜΠΛΟΚ");
        var list = document.getElementById("ΒΙΟΜΠΛΟΚlist");
        if (checkBox.checked == true){
          list.style.display = "block";
        } else {
           list.style.display = "none";
        }
      }

      function GenikoSynolo(synolo) {
        genikoSynolo = genikoSynolo + synolo;
        document.getElementById("genikosynolo").innerHTML = genikoSynolo.toFixed(2);
        
      }

      function clean(synolo){
        genikoSynolo = 0;
        document.getElementById("genikosynolo").innerHTML = genikoSynolo;
      }


      