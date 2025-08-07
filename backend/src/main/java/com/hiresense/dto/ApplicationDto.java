package com.hiresense.dto;

import com.hiresense.enums.ApplicationStatus;
import lombok.Data;

@Data
public class ApplicationDto {
    private Long id;
    private Long jobId;
    private Long candidateId;
    private ApplicationStatus status;
}
