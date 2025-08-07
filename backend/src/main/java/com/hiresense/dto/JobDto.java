package com.hiresense.dto;

import lombok.Data;

@Data
public class JobDto {
    private Long id;
    private String title;
    private String description;
    private String location;
    private String salary;
    private Long recruiterId;
}
