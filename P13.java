import java.math.BigInteger;
import java.io.BufferedReader;
import java.io.FileReader;

public class P13 {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new FileReader("P13File.txt"));

        try {
            BigInteger b = new BigInteger("0");
            String line = br.readLine();
            int i = 0;
            while (line != null) {

                BigInteger t = new BigInteger(line);
                // System.out.println(t);
                b = b.add(t);

                //System.out.println(b);
                line = br.readLine();
                i++;
                // if( i == 102) {
                //     break;
                // }
            }

            System.out.println(b.toString().substring(0,11));
        } finally {
            br.close();
        }
    }
}
