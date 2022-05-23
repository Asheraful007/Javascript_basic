      // "Vowel" and "Consonent" simple program
      var latter = prompt("Enter your latter:");
            latter = latter.toLowerCase();
          switch(latter){
            case "a" || "e" || "i" || "o" || "u":
                document.write("Vowel");
                break;

            default:
                document.write("Consonent");
            }

