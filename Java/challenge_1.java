import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;

public class challenge_1 {

  public static void main (String[] args) {

    try {
      File file = new File(args[0]);
      BufferedReader in = new BufferedReader(new FileReader(file));
      String line;
      while ((line = in.readLine()) != null) {
        String[] lineArray = line.split("\\s");

        if (lineArray.length > 0) {
          int[] numbers = new int[lineArray.length];

          for(int i = 0;i < lineArray.length;i++) {
            numbers[i] = Integer.parseInt(lineArray[i]);
          }
          String[] outputArray = new String[numbers[2]];
          for(int i=1; i <= numbers[2]; i++) {
            String aChar = "";
            String bChar = "";
            if (i % numbers[0] == 0 ) {aChar = "F";}
            if (i % numbers[1] == 0 ) {bChar = "B";}
            String fChar = aChar + bChar;
            if (fChar.length() == 0 ) {
              outputArray[i] = ( Integer.toString(i) );
            }
            else {
              outputArray[i] = (fChar);
            }
          }
          System.out.println(String.join(" ", outputArray));
        }
      }
    } catch (IOException e) {
        System.out.println("File Read Error: " + e.getMessage());
    }
  }
}
