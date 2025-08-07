package com.hiresense.dto;

import com.hiresense.enums.Role;
import lombok.Data;

import java.util.Set;

@Data
public class UserProfileDto {
    private Long id;
    private String email;
    private String fullName;
    private Set<Role> roles;
    private String headline;
    private String summary;
    private String skills;
    private String company;
    private String department;
}
