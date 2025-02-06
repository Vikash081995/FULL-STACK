
import java.util.Scanner;

public class Printing {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int rows;
        int columns;
        char symbol;
        System.out.println("Enter number of rows: ");
        rows = sc.nextInt();
        System.out.println("Enter number of columns: ");
        columns = sc.nextInt();
        System.out.println("Enter symbol to use: ");
        symbol = sc.next().charAt(0);
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < columns; j++) {
                System.out.println(symbol);
            }
            System.out.println();
        }

        sc.close();
    }
}
