package com.hiresense.dto;

import lombok.Data;

@Data
public class UpdateUserProfileDto {
    private String fullName;
    private String headline;
    private String summary;
    private String skills;
    private String company;
    private String department;
}
