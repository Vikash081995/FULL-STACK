import java.util.Scanner;

public class Ternary {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        // variable = (condition) ? expressionTrue : expressionFalse;
        System.out.println("enter a number");
        int a = sc.nextInt();
        String passOrFail = a < 10 ? "less than 10" : "more than 10";
        System.out.println(passOrFail);
        sc.close();
    }
}
