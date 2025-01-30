import java.util.Scanner;

public class IfElse {

    public static void main(String[] args){
        // IF ELSE BLOCK IN JAVA
        int age;

        Scanner scanner = new Scanner(System.in);
        System.out.println("What is your age ?");
        age = scanner.nextInt();
        if (age >= 19) {
            System.out.println("You are an adult ");
        } else if (age < 0) {
            System.out.println("You have not born yet");
        } else {
            System.out.println("You are a children");
        }
    }
}
