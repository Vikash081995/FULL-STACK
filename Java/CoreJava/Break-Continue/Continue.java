
public class Continue {
    public static void main(String[] args) {
        // break - break out of the loop
        // continue - skip the current iteration
        for (int i = 0; i < 10; i++) {
            if (i == 5) {
               continue;
            }
            System.out.println(i + "");
        }
    }
}
