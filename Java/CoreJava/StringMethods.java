public class StringMethods {
    public static void main(String[] args) {
        String emptyName = "";
        String name = "Bro Code";
        String name2 = "  Bro     hello ";
        int length = name.length();
        char letter = name.charAt(1);
        int index = name.indexOf("o");
        int lastIndex = name.lastIndexOf("o");
        String CapsName = name.toUpperCase();
        String trimmedName = name2.trim();
        String newName = name.replace("o", "a");

        System.out.println("Length of the string: " + length); // Length of the string: 8
        System.out.println("Character at index 1: " + letter); // Character at index 1: r
        System.out.println("Index of 'o': " + index); // Index of 'o': 2
        System.out.println("Last index of 'o': " + lastIndex);// Last index of 'o': 5
        System.out.println("Name in caps: " + CapsName); // Name in caps: BRO CODE
        System.out.println("Trimmed name: " + trimmedName);//
        System.out.println("New name: " + newName); // New name: Bra Cade
        if (emptyName.isEmpty()) {
            System.out.println("Name is empty");
        } else {
            System.out.println("Name is not empty");
        }

        if (name.contains(" ")) {
            System.out.println("Name contains a space");
        } else {
            System.out.println("Name does not contain a space");
        }

        if(name.equals("Bro Code")) {
            System.out.println("Name is equal to Bro Code");
        } else {
            System.out.println("Name is not equal to Bro Code");
        }   

    }

}
