package com.hiresense.dto;

import lombok.Data;

import java.util.List;

@Data
public class ParsedResumeDto {
    private String name;
    private String email;
    private String education;
    private List<String> skills;
    private String experience;
    private String full_text;
}
