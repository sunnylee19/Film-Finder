package com.filmfinder.util;

import java.security.MessageDigest;
import java.util.Base64;

public class Cryptography {

    static public String sha256(String input) {
        try {
            MessageDigest enc = MessageDigest.getInstance("SHA-256");
            return Base64.getEncoder()
                         .encodeToString(enc.digest(input.getBytes()));
        } catch (Exception ex) {
            System.err.println(ex);
            ex.printStackTrace(System.err);
            return null;
        }
    }
}
