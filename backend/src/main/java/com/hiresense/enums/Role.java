package com.hiresense.enums;

/**
 * Defines the user roles available in the application.
 * These roles are used for controlling access to different parts of the API.
 */
public enum Role {
    /**
     * Administrator with full access to all system functionalities.
     */
    ADMIN,

    /**
     * Recruiter with access to job posting, candidate management, and interviews.
     */
    RECRUITER,

    /**
     * Candidate with access to job searching, application submission, and profile management.
     */
    CANDIDATE
}
