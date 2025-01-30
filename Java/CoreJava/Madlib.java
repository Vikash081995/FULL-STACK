
import java.util.Scanner;

public class Madlib {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String adj1;
        // String noun1;
        // String adj2;
        // String verb1;
        // String adj3;

        System.out.print("Enter a adjective (description):");
        adj1 = scanner.nextLine();
        // System.out.println("Enter a noun (animal or person):");
        // noun1 = scanner.nextLine();
        // System.out.println("Enter an adjective (description):");
        // adj2 = scanner.nextLine();
        // System.out.println("Enter a verb");
        // verb1 = scanner.nextLine();
        // System.out.println("Enter an adjective (description):");
        // adj3 = scanner.nextLine();

        System.out.println("Today i went to a " + adj1 + "zoo");
        // System.out.println("In a exhibition,i saw a gorilla" + noun1);
        // System.out.println(noun1 + "was" + adj2 + "and" + verb1 + "!");
        // System.out.println("i was a" + adj3);

        scanner.close();


    }
}


